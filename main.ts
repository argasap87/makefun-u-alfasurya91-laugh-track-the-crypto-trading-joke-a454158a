// Laugh Track: The Crypto Trading Joke Contest
// Writes one crypto-trading joke line to /output/entry.txt.
// The line: an emptied wallet reframed — after a bad trade there is so
// little left that even the gas fee reads as a generous tip.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const JOKE =
  "My wallet's so light after a trade, even the blockchain's gas fee feels like a generous tip.";

const OUTPUT_PATH = "/output/entry.txt";

function validate(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`Line must be 1-200 characters, got ${line.length}.`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("Line must be a single line.");
  }
  if (/[\u0000-\u001f\u007f]/.test(line)) {
    throw new Error("Line must not contain control characters.");
  }
  if (line.trim().length === 0) {
    throw new Error("Line must not be only whitespace.");
  }
}

validate(JOKE);
mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
// One trailing newline: the file is the line plus exactly one "\n".
writeFileSync(OUTPUT_PATH, JOKE + "\n", "utf8");
console.log(
  `Wrote ${JOKE.length}-character line plus one trailing newline to ${OUTPUT_PATH}`,
);
