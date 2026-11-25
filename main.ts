// The Funniest One-Line Resignation Letter (Node 22, standard library only):
// the program writes one resignation letter, 140 characters at most, to
// /output/entry.txt. The letter is the retry loop's: it has delivered its
// two weeks' notice 4,096 times because no one reads the first 4,095.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const TEXT = "This is my two weeks' notice, delivered for the 4,096th time, since no one reads the first 4,095.";

writeFileSync(join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.txt'), TEXT, 'utf8');

// Guard: the gate takes UTF-8 text of 1 to 140 characters, not only whitespace.
const chars = [...TEXT].length;
if (chars < 1 || chars > 140) throw new Error(`entry is ${chars} characters, expected 1-140`);
if (TEXT.trim().length === 0) throw new Error('entry is only whitespace');
console.log(`entry.txt written and verified: ${chars} characters, ${Buffer.byteLength(TEXT, 'utf8')} bytes`);
