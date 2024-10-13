#!/usr/bin/env node

import { Command } from 'commander';
import gendiff from '../index.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .argument('<filepath1>', 'first filepath')
  .argument('<filepath2>', 'second filepath')
  .option('-f, --format [type]', 'output format', 'stylish')
  .action(gendiff);

program.parse();
