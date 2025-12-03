# scripts/get_tree_files.py
import os

EXCLUDE_DIRS = {'.git', '__pycache__', '.vscode/', 'node_modules', 'dist', 'public' }# Ignore folders

def print_tree(root, prefix=""):
    try:
        entries = sorted(os.listdir(root))
    except PermissionError:
        return

    files = [f for f in entries if os.path.isfile(os.path.join(root, f))]
    dirs = [d for d in entries if os.path.isdir(os.path.join(root, d)) and d not in EXCLUDE_DIRS]

    for i, name in enumerate(files + dirs):
        path = os.path.join(root, name)
        connector = "├── " if i < len(files + dirs) - 1 else "└── "

        print(prefix + connector + name)

        if os.path.isdir(path):
            extension = "│   " if i < len(files + dirs) - 1 else "    "
            print_tree(path, prefix + extension)

if __name__ == "__main__":
    start_dir = "."  # Current directory
    print("/")
    print_tree(start_dir)

