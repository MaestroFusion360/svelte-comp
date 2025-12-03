# scripts/batch_archive_files.py
import os
import subprocess

# Global variable — path to the folder containing the files
FOLDER_PATH = r"D:\\"  # directory path

# Path to the 7z executable
SEVEN_ZIP = r"C:\Program Files\7-Zip\7z.exe"

def archive_each_file(folder_path):
    for file in os.listdir(folder_path):
        full_path = os.path.join(folder_path, file)

        if os.path.isfile(full_path):
            archive_name = os.path.join(folder_path, f"{os.path.splitext(file)[0]}.zip")
            command = [SEVEN_ZIP, 'a', '-tzip', archive_name, full_path]

            try:
                subprocess.run(command, check=True)
                # print(f"Archive created: {archive_name}")
            except subprocess.CalledProcessError as e:
                print(f"Error while archiving {file}: {e}")

if __name__ == "__main__":
    archive_each_file(FOLDER_PATH)
