# scripts/find_cyrylic_words.py
import os
import re

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(SCRIPT_DIR, "..", "src", "lib"))

CYR = re.compile(r"[А-Яа-яЁё]+")

def scan_file(path):
    with open(path, "r", encoding="utf-8", errors="ignore") as f:
        for lineno, line in enumerate(f, start=1):
            for match in CYR.finditer(line):
                col = match.start() + 1
                word = match.group()
                print(f"{path}:{lineno}:{col}: {word}")

def walk():
    print("Scanning folder:", ROOT)
    for root, _, files in os.walk(ROOT):
        for name in files:
            if name.endswith((".svelte", ".ts", ".js", ".css", ".html", ".json", ".md")):
                scan_file(os.path.join(root, name))

walk()
