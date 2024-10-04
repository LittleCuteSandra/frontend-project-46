#!/usr/bin/env node
/* eslint-disable no-console */

import { program } from 'commander';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .argument('<filepath1>', 'first filepath')
  .argument('<filepath2>', 'second filepath')
  .option('-f, --format [type]', 'output format');

program.parse();
