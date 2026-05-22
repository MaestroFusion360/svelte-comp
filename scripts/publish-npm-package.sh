#!/usr/bin/env bash
set -Eeuo pipefail

repo_root="/home/yur1k87/projects/github/svelte-comp"
expected_branch="${EXPECTED_BRANCH:-npm-package}"
package_dir="${PACKAGE_DIR:-package}"
dry_run="${DRY_RUN:-0}"

cd "$repo_root"

fail() {
  echo "ERROR: $*" >&2
  exit 1
}

has_npm_script() {
  node -e '
    const p = require("./package.json");
    const name = process.argv[1];
    process.exit(p.scripts && p.scripts[name] ? 0 : 1);
  ' "$1"
}

if [ -f ".env" ]; then
  set -a
  . ".env"
  set +a
fi

git rev-parse --is-inside-work-tree >/dev/null 2>&1 || fail "Not inside git repository: $repo_root"

current_branch="$(git branch --show-current)"
[ "$current_branch" = "$expected_branch" ] || fail "Expected branch '$expected_branch', got '$current_branch'."

[ -z "$(git status --porcelain)" ] || fail "Working tree is dirty. Commit/stash changes first."

[ -n "${NPM_TOKEN:-}" ] || fail "NPM_TOKEN is not set. Put it into $repo_root/.env or export it before running."

[ -f "package.json" ] || fail "package.json not found."
[ -d "src" ] || fail "src directory not found."

echo "==> Repo: $repo_root"
echo "==> Branch: $current_branch"

echo "==> Installing dependencies"
npm install

if has_npm_script check; then
  echo "==> Running npm run check"
  npm run check
else
  echo "==> No npm run check script, skipped"
fi

if has_npm_script build; then
  echo "==> Running npm run build"
  npm run build
else
  echo "==> No npm run build script, skipped"
fi

echo "==> Running svelte-package --input src"
npx svelte-package --input src

[ -d "$package_dir" ] || fail "Package directory '$package_dir' was not created."
[ -f "$package_dir/package.json" ] || fail "$package_dir/package.json was not created."

echo "==> Verifying packaged components"
python3 - "$package_dir" <<'PY'
import sys
from pathlib import Path

package_dir = Path(sys.argv[1])

src_roots = [
    Path("src/lib"),
    Path("src/components"),
]

src_components = []
for root in src_roots:
    if root.exists():
        src_components.extend(p for p in root.rglob("*.svelte") if p.is_file())

pkg_components = [p for p in package_dir.rglob("*.svelte") if p.is_file()]
pkg_js = [p for p in package_dir.rglob("*.js") if p.is_file()]
pkg_dts = [p for p in package_dir.rglob("*.d.ts") if p.is_file()]

if not src_components:
    raise SystemExit("ERROR: No source .svelte components found under src/lib or src/components.")

if not pkg_components:
    raise SystemExit("ERROR: No packaged .svelte components found in package directory.")

pkg_names = {p.name for p in pkg_components}
missing = [str(p) for p in src_components if p.name not in pkg_names]

if missing:
    print("ERROR: These source components were not found in packaged output:")
    for item in missing:
        print(f"  - {item}")
    raise SystemExit(1)

if not pkg_js:
    raise SystemExit("ERROR: No .js files found in packaged output.")

if not pkg_dts:
    raise SystemExit("ERROR: No .d.ts files found in packaged output.")

print(f"OK: source components: {len(src_components)}")
print(f"OK: packaged components: {len(pkg_components)}")
print(f"OK: packaged js files: {len(pkg_js)}")
print(f"OK: packaged d.ts files: {len(pkg_dts)}")
PY

tmp_npmrc="$(mktemp "${TMPDIR:-/tmp}/npm-publish-userconfig-XXXXXX")"

cleanup() {
  [ -f "$tmp_npmrc" ] && rm -- "$tmp_npmrc"
}
trap cleanup EXIT

printf '//registry.npmjs.org/:_authToken=%s\n' "$NPM_TOKEN" > "$tmp_npmrc"
export NPM_CONFIG_USERCONFIG="$tmp_npmrc"

echo "==> npm whoami"
npm whoami

echo "==> npm pack dry-run"
npm pack --dry-run "$package_dir"

if [ "$dry_run" = "1" ]; then
  echo "DRY_RUN=1, publish skipped."
  exit 0
fi

echo "==> Publishing"
npm publish "$package_dir" --access public

echo "Published successfully."
