#!/usr/bin/env bash

cd "$(dirname "$0")/.."

report=$(mktemp)
total=0

files=$(printf "%s\n" README.md $(find src -type f))

for f in $files; do
    if [ -f "$f" ]; then
        n=$(wc -l < "$f")
        printf "%s\t%s\n" "$n" "$f" >> "$report"
        total=$((total + n))
    fi
done

{
    sort -n "$report"
    printf "TOTAL\t%s\n" "$total"
} > git_rep.txt

rm "$report"
