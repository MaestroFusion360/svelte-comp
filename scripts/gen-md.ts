// scripts/gen-md.ts
import fs from "fs";
import path from "path";

type Prop = {
  id: string;
  type: string;
  desc: string;
  default: string | null;
  options: string | null;
};

const input = process.argv[2];
if (!input) throw new Error("Missing input file or directory");

// Helpers
const isDir = fs.statSync(input).isDirectory();
const files = isDir
  ? fs
      .readdirSync(input)
      .filter((f) => f.endsWith(".svelte"))
      .map((f) => path.join(input, f))
  : [input];

function extract(file: string): string {
  const code = fs.readFileSync(file, "utf8");

  const start = code.indexOf("/**");
  const end = code.indexOf("*/", start);
  if (start < 0 || end < 0) throw new Error(`JSDoc not found in ${file}`);

  const jsdoc = code.slice(start + 3, end).trim();
  const lines = jsdoc
    .split("\n")
    .map((l) => l.trim().replace(/^\* ?/, ""));

  let component = "";
  let description = "";
  const props: Prop[] = [];
  const notes: string[] = [];

  let current: Prop | null = null;

  for (const line of lines) {
    if (line.startsWith("@component")) {
      component = line.slice(11).trim();
      continue;
    }

    if (line.startsWith("@description")) {
      description = line.slice(12).trim();
      continue;
    }

    if (line.startsWith("@prop")) {
      if (current) props.push(current);

      const m = line.match(/@prop\s+(\w+)\s+\{([^}]+)\}\s+-\s+(.*)/);
      if (m) {
        current = {
          id: m[1],
          type: m[2].trim(),
          desc: m[3].trim(),
          default: null,
          options: null,
        };
      }
      continue;
    }

    if (line.startsWith("@default") && current) {
      current.default = line.slice(8).trim();
      continue;
    }

    if (line.startsWith("@options") && current) {
      current.options = line.slice(8).trim();
      continue;
    }

    if (line.startsWith("@note")) {
      notes.push(line.slice(5).trim());
      continue;
    }
  }

  if (current) props.push(current);

  let md = "";

  md += `### ${component}.svelte\n\n`;
  md += `${description}\n\n`;

  md += `#### Props (${component})\n\n`;
  for (const p of props) {
    const opts = p.options ? ` (${p.options})` : "";
    const def = p.default ? ` (default: \`${p.default}\`)` : "";
    md += `- \`${p.id}?: ${p.type}\` - ${p.desc}${opts}${def}\n`;
  }
  md += `\n`;

  md += `#### Notes (${component})\n\n`;
  for (const n of notes) md += `- ${n}\n`;
  md += `\n`;

  return md;
}

// Run
let output = "";
for (const f of files) {
  output += extract(f);
}

// console.log(output);

// Write to Components.md in project root
fs.writeFileSync("Components.md", output, "utf8");
console.log("Generated Components.md");
