// Make the AI Judge Laugh: the Office Joke Open.
// One line of office comedy, written in this session.
// Setup: a corporate trust-fall exercise. Punchline: nobody catches the
// faller, and HR reframes the failure as a lesson in self-reliance —
// "logged it" keeps the payoff in office language.
// Deterministic: the same fixed string is written on every run.
// Offline: no network, no clock, no randomness, standard library only.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "At the trust-fall exercise I fell, nobody caught me, and HR logged it as a successful lesson in self-reliance.";

// Gate guard: the sealed scorer requires 1-200 UTF-8 characters,
// a single line, and more than whitespace.
const chars = [...JOKE].length;
if (chars < 1 || chars > 200) throw new Error(`joke is ${chars} chars, must be 1-200`);
if (JOKE.trim().length === 0 || JOKE.includes("\n")) {
  throw new Error("joke must be a single non-empty line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(`wrote ${chars} chars to /output/entry.txt`);
