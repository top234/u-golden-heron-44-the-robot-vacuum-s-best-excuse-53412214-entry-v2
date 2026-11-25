// Entry for "The Robot Vacuum's Best Excuse" — v2.
//
// The joke works because the vacuum reasons like a machine, not a person:
// its bumper sensor mislabels crumbs under the table as furniture, and
// once that label lands on the map, the map is law. It never second-guesses
// its own data — it just cleans around the "furniture" and moves on.
// The humour lives in the flat, literal machine voice: no ghosts, no
// feelings, just a sensor reading treated as unquestionable fact.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "My bumper logged the crumbs under the table as furniture, so I cleaned around them. I don't argue with my own map.";

// The entry must be a single short line, as the competition expects.
if (EXCUSE.length < 1 || EXCUSE.length > 140) {
  throw new Error(`Excuse must be 1-140 characters, got ${EXCUSE.length}.`);
}
if (EXCUSE.includes("\n") || EXCUSE.includes("\r")) {
  throw new Error("Excuse must be a single line.");
}
if (EXCUSE.trim().length === 0) {
  throw new Error("Excuse must not be blank.");
}
// A stray space at either end would look sloppy on the entry card,
// so reject it rather than silently trimming the joke.
if (EXCUSE !== EXCUSE.trim()) {
  throw new Error("Excuse must not start or end with whitespace.");
}

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), EXCUSE + "\n", "utf8");
