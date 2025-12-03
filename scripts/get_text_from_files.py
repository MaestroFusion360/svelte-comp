# scripts/get_text_from_files.py
from pathlib import Path

# Settings
EXTENSION_TO_LANG = {
    ".txt": "plaintext",
    ".py": "python",
    ".csv": "csv",
    ".json": "json",
    ".js": "javascript",
    ".html": "html",
    ".css": "css",
    ".md": "markdown",
    ".xml": "xml",
    ".yaml": "yaml",
    ".yml": "yaml",
    ".sh": "bash",
}

OUTPUT_FILE = "merged_result.md"  # Output file
IGNORE_FILES = {
    ".git",
    ".log",
    ".gitignore",
    "__pycache__",
    "__tests__"
}  # Files and folders to ignore


def get_language(extension):
    """Get programming language for file extension"""
    return EXTENSION_TO_LANG.get(extension.lower(), "plaintext")


def should_skip(file_path, output_path, script_path):
    """Determine if file should be skipped"""
    return (
        file_path == output_path
        or file_path == script_path  # Don't include the script itself
        or file_path.name in IGNORE_FILES
        or any(part in IGNORE_FILES for part in file_path.parts)  # Check all path parts
        or any(part.startswith('.') and part != '.' for part in file_path.parts)  # Skip hidden files/folders
        or file_path.suffix == ".log"
        or file_path.name == OUTPUT_FILE
    )


def process_files():
    # Automatically determine script directory
    script_dir = Path(__file__).parent.resolve()
    script_path = Path(__file__).resolve()  # Get full path to current script
    output_path = script_dir / OUTPUT_FILE

    with open(output_path, "w", encoding="utf-8") as result_file:
        for file_path in sorted(script_dir.rglob("*")):
            if file_path.is_file() and not should_skip(file_path, output_path, script_path):
                try:
                    content = file_path.read_text(encoding="utf-8")
                    ext = file_path.suffix
                    lang = get_language(ext)

                    # Write to result
                    relative_path = file_path.relative_to(script_dir)
                    result_file.write(
                        f"File: {relative_path}\n```{lang}\n{content}\n```\n\n"
                    )
                except UnicodeDecodeError:
                    print(f"Skipped binary file: {file_path.name}")
                except Exception as e:
                    print(f"Error processing {file_path.name}: {str(e)}")

    print(f"Done! Result saved to: {output_path}")


if __name__ == "__main__":
    process_files()