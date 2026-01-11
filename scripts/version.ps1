Param(
  [string]$RepoRoot = (Split-Path -Parent $PSScriptRoot)
)

$packagePath = Join-Path $RepoRoot "package.json"
$langPath = Join-Path $RepoRoot "src\\lang.ts"

if (-not (Test-Path $packagePath)) {
  throw "package.json not found at $packagePath"
}

if (-not (Test-Path $langPath)) {
  throw "lang.ts not found at $langPath"
}

$packageJson = Get-Content $packagePath -Raw | ConvertFrom-Json
$version = $packageJson.version

if (-not $version) {
  throw "package.json version is empty"
}

$langText = Get-Content $langPath -Raw
$replacement = "version: `"v$version`""
$updated = [regex]::Replace($langText, 'version:\s*"v[^"]+"', $replacement)

if ($updated -eq $langText) {
  throw "No version field updated in lang.ts"
}

Set-Content -Path $langPath -Value $updated -NoNewline
Write-Output "Updated lang.ts version to v$version"
