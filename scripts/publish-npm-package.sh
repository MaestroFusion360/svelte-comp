#!/usr/bin/env bash
set -Eeuo pipefail

REPO_ROOT="/home/yur1k87/projects/github/svelte-comp"
OUT_DIR="dist"
DRY_RUN=0

for arg in "$@"; do
  case "$arg" in
    --dry-run) DRY_RUN=1 ;;
    -h|--help)
      echo "Usage: scripts/publish-npm-package.sh [--dry-run]"
      exit 0
      ;;
    *)
      echo "ERROR: unknown argument: $arg" >&2
      echo "Usage: scripts/publish-npm-package.sh [--dry-run]" >&2
      exit 1
      ;;
  esac
done

cd "$REPO_ROOT"

fail() {
  echo "ERROR: $*" >&2
  exit 1
}

[ -f "package.json" ] || fail "package.json not found."
[ -d "src" ] || fail "src directory not found."
[ -x "node_modules/.bin/svelte-package" ] || fail "svelte-package not found. Install deps manually first."

echo "==> Cleaning old output: $OUT_DIR"
python3 - <<'PY'
from pathlib import Path
import shutil

p = Path("dist")
if p.exists():
    if p.is_dir():
        shutil.rmtree(p)
    else:
        p.unlink()
PY

echo "==> Building package"
./node_modules/.bin/svelte-package --input src

[ -d "$OUT_DIR" ] || fail "$OUT_DIR directory was not created."

echo "==> Verifying dist output"
python3 - <<'PY'
from pathlib import Path

out = Path("dist")

svelte_files = list(out.rglob("*.svelte"))
js_files = list(out.rglob("*.js"))
dts_files = list(out.rglob("*.d.ts"))

if not svelte_files:
    raise SystemExit("ERROR: no .svelte components in dist/")
if not js_files:
    raise SystemExit("ERROR: no .js files in dist/")
if not dts_files:
    raise SystemExit("ERROR: no .d.ts files in dist/")

print(f"OK: dist .svelte files: {len(svelte_files)}")
print(f"OK: dist .js files: {len(js_files)}")
print(f"OK: dist .d.ts files: {len(dts_files)}")
PY

echo "==> npm whoami"
npm whoami --registry=https://registry.npmjs.org/

echo "==> npm pack dry-run from repo root"
npm pack --dry-run .

if [ "$DRY_RUN" = "1" ]; then
  echo "Dry run complete, publish skipped."
  exit 0
fi

echo "==> Publishing from repo root"
npm publish . --access public --registry=https://registry.npmjs.org/
