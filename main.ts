// One-line vending machine pickup line entry.
// The entry line is held as a single constant and written to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The pickup line this vending machine would use on a passing human.
// It stays in the machine's own world (its coil, its snack, its button B7)
// and lands its punch in the last few words: "finally let go".
const ENTRY_LINE =
  "My coil's been holding my best snack all day just for you — press B7 and watch it finally let go.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY_LINE, "utf8");
console.log(ENTRY_LINE);
console.log(`Characters: ${ENTRY_LINE.length}`);
