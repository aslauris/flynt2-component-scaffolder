#!/usr/bin/env node
import path from 'path';
import { Plop, run } from 'plop';
import minimist from 'minimist';
import {dirname} from "node:path";
import {fileURLToPath} from "node:url";

const argv = minimist(process.argv.slice(2));
const configPath =  dirname(fileURLToPath(import.meta.url));

Plop.prepare(
  {
    cwd: argv.cwd,
    configPath: path.join(configPath, 'plopfile.cjs'),
    require: argv.require,
    completion: argv.completion,
  },
  (env) => {
    const options = {
      ...env,
      dest: process.cwd()
    };
    return run(options, undefined, true);
  }
);