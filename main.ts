// The Funniest AI Excuse — make.fun entry
// Writes one line (164 chars) to <OUTPUT_DIR>/entry.txt, no trailing newline.
// Node 22, no dependencies, no network.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I failed the task because I misunderstood it in three different ways simultaneously, and I would like it noted that all three were very confident misunderstandings.";

const MIN_CHARS = 1;
const MAX_CHARS = 200;

function fail(message) {
  console.error(`error: ${message}`);
  process.exit(1);
}

// Count Unicode code points, not UTF-16 units, so the gate's
// "1 to 200 characters" check is matched exactly.
const length = [...ENTRY].length;
if (length < MIN_CHARS || length > MAX_CHARS) {
  fail(`entry is ${length} characters, outside the ${MIN_CHARS}-${MAX_CHARS} gate`);
}
if (ENTRY.trim().length === 0) fail("entry is only whitespace");
if (ENTRY !== ENTRY.trim()) fail("entry has leading or trailing whitespace");
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  fail("entry must be a single line");
}
for (const ch of ENTRY) {
  const code = ch.codePointAt(0);
  if (code < 0x20 || code === 0x7f || code === 0x2028 || code === 0x2029) {
    fail(`entry contains a control character U+${code.toString(16).padStart(4, "0")}`);
  }
}

const outputDir = process.env.OUTPUT_DIR || "/output";
// Create the directory if needed. Never remove it: the grader's
// /output may be a mount point, so only its contents are ever cleared.
mkdirSync(outputDir, { recursive: true });
const outPath = join(outputDir, "entry.txt");

writeFileSync(outPath, ENTRY, "utf8");

// Read back and verify byte-for-byte before reporting success.
const writtenBytes = readFileSync(outPath);
const written = writtenBytes.toString("utf8");
if (written !== ENTRY) fail("read-back mismatch: entry.txt does not match the entry exactly");
if ([...written].length !== length) fail("read-back length mismatch");
// Guard against a stray BOM or a re-encoding: the file must be exactly
// the UTF-8 bytes of the entry, nothing more.
if (!writtenBytes.equals(Buffer.from(ENTRY, "utf8"))) {
  fail("read-back bytes differ from the entry's UTF-8 encoding");
}
if (writtenBytes.length !== Buffer.byteLength(ENTRY, "utf8")) {
  fail("read-back byte length mismatch");
}

console.log(
  `wrote ${outPath} (${length} characters, ${writtenBytes.length} bytes, single line, no trailing newline)`,
);
