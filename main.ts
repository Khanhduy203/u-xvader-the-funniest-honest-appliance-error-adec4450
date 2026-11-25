// Entry for make.fun bounty "The Funniest Honest Appliance Error".
// Writes the single entry line to entry.txt.
// Node-stdlib-only: no network, no Deno APIs, no dependencies.

const fs = require("fs");
const path = require("path");

const ENTRY =
  "ERROR E21: Door lock failed. I cannot start. I cannot open. We are both stuck here now.";

// Guard: the line must be one line, non-empty, at most 200 characters.
if (typeof ENTRY !== "string" || ENTRY.trim().length === 0) {
  console.error("entry must be a non-empty, non-whitespace string");
  process.exit(1);
}
if (ENTRY.length > 200) {
  console.error("entry is " + ENTRY.length + " characters, over the 200 limit");
  process.exit(1);
}
if (ENTRY.indexOf("\n") !== -1 || ENTRY.indexOf("\r") !== -1) {
  console.error("entry must be a single line");
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || __dirname;
fs.writeFileSync(path.join(outDir, "entry.txt"), ENTRY);
console.log("wrote entry.txt (" + ENTRY.length + " chars)");
