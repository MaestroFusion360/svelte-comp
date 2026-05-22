import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve("src/lib");
const extensions = new Set([".svelte", ".ts", ".js"]);
const forbidden = ['"$lib', "'$lib", '"$utils', "'$utils"];

async function collectFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await collectFiles(fullPath)));
      continue;
    }

    if (entry.isFile() && extensions.has(path.extname(entry.name))) {
      files.push(fullPath);
    }
  }

  return files;
}

const files = await collectFiles(root);
const violations = [];

for (const file of files) {
  const text = await readFile(file, "utf8");
  const lines = text.split(/\r?\n/u);

  lines.forEach((line, index) => {
    if (forbidden.some((needle) => line.includes(needle))) {
      violations.push({ file, line: index + 1, content: line.trim() });
    }
  });
}

if (violations.length > 0) {
  console.error("Forbidden Vite alias imports found in src/lib:");
  for (const violation of violations) {
    console.error(
      `${path.relative(process.cwd(), violation.file)}:${violation.line}: ${violation.content}`,
    );
  }
  process.exit(1);
}

console.log("No $lib/$utils imports found in src/lib.");
