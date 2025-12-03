# scripts/git_calc.ps1
# git ls-files | ForEach-Object {
#     $lines = (Get-Content $_).Length
#     "{0}`t{1}" -f $lines, $_
# }

#!/usr/bin/env pwsh

Set-Location (Split-Path $MyInvocation.MyCommand.Path | Split-Path)

# Temporary file
$report = New-TemporaryFile
$total = 0

# Files: README.md + everything under src
$files = @("README.md") + (Get-ChildItem -Recurse -File -Path "src" | Select-Object -ExpandProperty FullName)

foreach ($f in $files) {
    if (Test-Path $f) {
        $n = (Get-Content $f).Count
        # Write "lines  filename" to temp
        $relative = Resolve-Path -Relative $f
        "$n`t$relative" | Out-File -FilePath $report -Append -Encoding utf8

        $total += $n
    }
}

# Sort and output to git_rep.txt
# Sort by number, numeric
$sorted = Get-Content $report | Sort-Object { [int]($_ -split "`t")[0] }

$sorted | Out-File git_rep.txt -Encoding utf8
"TOTAL`t$total" | Out-File git_rep.txt -Append -Encoding utf8

# Cleanup temp
Remove-Item $report -Force
