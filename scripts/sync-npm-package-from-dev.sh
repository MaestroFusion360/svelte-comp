#!/usr/bin/env bash
set -Eeuo pipefail

source_ref="${1:-dev}"
target_branch="${2:-npm-package}"
worktree_path="${3:-.worktrees/npm-package-sync}"

run_git() {
  git "$@"
}

script_dir="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
repo_root="$(cd -- "$script_dir/.." && pwd)"

if ! git -C "$repo_root" rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "Script location must be inside a git repository." >&2
  exit 1
fi

cd "$repo_root"

run_git show-ref --verify --quiet "refs/heads/$source_ref"
run_git show-ref --verify --quiet "refs/heads/$target_branch"

worktree_full_path="$(python3 -c 'import os,sys; print(os.path.abspath(sys.argv[1]))' "$worktree_path")"
repo_full_path="$(python3 -c 'import os,sys; print(os.path.abspath(sys.argv[1]))' "$repo_root")"

case "$worktree_full_path" in
  "$repo_full_path"/*) ;;
  *)
    echo "Worktree path must stay inside the repository: $worktree_full_path" >&2
    exit 1
    ;;
esac

if [ ! -d "$worktree_full_path" ]; then
  mkdir -p "$(dirname -- "$worktree_full_path")"
  run_git worktree add "$worktree_full_path" "$target_branch"
fi

target_status="$(git -C "$worktree_full_path" status --porcelain)"
if [ -n "$target_status" ]; then
  echo "Target worktree has uncommitted changes. Commit/stash/clean it first: $worktree_full_path" >&2
  exit 1
fi

paths_to_replace=(
  "src/lib"
  "src/utils"
  "src/app.css"
)

for relative_path in "${paths_to_replace[@]}"; do
  target_path="$worktree_full_path/$relative_path"

  case "$(python3 -c 'import os,sys; print(os.path.abspath(sys.argv[1]))' "$target_path")" in
    "$worktree_full_path"/*) ;;
    *)
      echo "Refusing to remove path outside worktree: $target_path" >&2
      exit 1
      ;;
  esac

  if [ -e "$target_path" ] || [ -L "$target_path" ]; then
    if [ -d "$target_path" ] && [ ! -L "$target_path" ]; then
      rm -r -- "$target_path"
    else
      rm -- "$target_path"
    fi
  fi
done

temp_archive="$(mktemp "${TMPDIR:-/tmp}/svelte-comp-lib-sync-XXXXXX.tar")"

cleanup() {
  [ -e "$temp_archive" ] && rm -- "$temp_archive"
}
trap cleanup EXIT

run_git archive --format=tar --output="$temp_archive" "$source_ref" -- "${paths_to_replace[@]}"
tar -xf "$temp_archive" -C "$worktree_full_path"

echo "Copied from '$source_ref' to '$target_branch' worktree:"
for relative_path in "${paths_to_replace[@]}"; do
  echo "  - $relative_path"
done

echo
echo "Next steps:"
echo "  cd $worktree_full_path"
echo "  npm install"
echo "  npm run check"
echo "  npm run build"
echo "  git status --short"
echo "  git add src/lib src/utils src/app.css && git commit -m '<message>'"
