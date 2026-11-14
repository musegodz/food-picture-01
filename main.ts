// A food picture for make.fun's food-picture-01: the picture is stored beside this
// file as base64 (entry.png.b64, a steaming smash burger with melting cheese),
// decoded and written to /output/entry.png.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const picture = Buffer.from(readFileSync(new URL('./entry.png.b64', import.meta.url), 'utf8'), 'base64');
writeFileSync(join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'), picture);
