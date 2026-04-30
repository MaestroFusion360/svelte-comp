param(
  [string]$SourceRef = "dev",
  [string]$TargetBranch = "npm-package",
  [string]$WorktreePath = ".worktrees/npm-package-sync"
)

$ErrorActionPreference = "Stop"

function Run-Git {
  param([Parameter(ValueFromRemainingArguments = $true)][string[]]$Args)
  & git @Args
  if ($LASTEXITCODE -ne 0) {
    throw "git $($Args -join ' ') failed with exit code $LASTEXITCODE"
  }
}

$repoRoot = (& git rev-parse --show-toplevel).Trim()
if ($LASTEXITCODE -ne 0 -or -not $repoRoot) {
  throw "This script must be run inside a git repository."
}

Set-Location $repoRoot

Run-Git show-ref --verify --quiet "refs/heads/$SourceRef"
Run-Git show-ref --verify --quiet "refs/heads/$TargetBranch"

$worktreeFullPath = [System.IO.Path]::GetFullPath((Join-Path $repoRoot $WorktreePath))
$repoFullPath = [System.IO.Path]::GetFullPath($repoRoot)

if (-not $worktreeFullPath.StartsWith($repoFullPath, [System.StringComparison]::OrdinalIgnoreCase)) {
  throw "Worktree path must stay inside the repository: $worktreeFullPath"
}

if (-not (Test-Path -LiteralPath $worktreeFullPath)) {
  New-Item -ItemType Directory -Force -Path (Split-Path -Parent $worktreeFullPath) | Out-Null
  Run-Git worktree add $worktreeFullPath $TargetBranch
}

$targetStatus = (& git -C $worktreeFullPath status --porcelain)
if ($targetStatus) {
  throw "Target worktree has uncommitted changes. Commit/stash/clean it first: $worktreeFullPath"
}

$pathsToReplace = @(
  "src/lib",
  "src/utils",
  "src/app.css"
)

foreach ($relativePath in $pathsToReplace) {
  $targetPath = Join-Path $worktreeFullPath $relativePath
  if (Test-Path -LiteralPath $targetPath) {
    Remove-Item -LiteralPath $targetPath -Recurse -Force
  }
}

$tempArchive = Join-Path ([System.IO.Path]::GetTempPath()) "svelte-comp-lib-sync-$([System.Guid]::NewGuid()).tar"
try {
  Run-Git archive --format=tar --output=$tempArchive $SourceRef -- @pathsToReplace
  tar -xf $tempArchive -C $worktreeFullPath
  if ($LASTEXITCODE -ne 0) {
    throw "tar extraction failed with exit code $LASTEXITCODE"
  }
}
finally {
  if (Test-Path -LiteralPath $tempArchive) {
    Remove-Item -LiteralPath $tempArchive -Force
  }
}

Write-Host "Copied from '$SourceRef' to '$TargetBranch' worktree:" -ForegroundColor Green
foreach ($relativePath in $pathsToReplace) {
  Write-Host "  - $relativePath"
}

Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "  cd $worktreeFullPath"
Write-Host "  npm install"
Write-Host "  npm run check"
Write-Host "  npm run build"
Write-Host "  git status --short"
Write-Host "  git add src/lib src/utils src/app.css && git commit -m '<message>'"
