import path from 'path';
import fs from 'fs';
import parse from './parse.js';
import compare from './compareFiles.js';
import format from './formatters/index.js';

const getFullFilepath = (filepath) => path.resolve(process.cwd(), filepath);
const getFileFormat = (filepath) => path.extname(filepath).slice(1);
const getData = (filepath) => parse(fs.readFileSync(filepath, 'utf-8'), getFileFormat(filepath));

const gendiff = (filepath1, filepath2, options) => {
  const fullFilepath1 = getFullFilepath(filepath1);
  const fullFilepath2 = getFullFilepath(filepath2);

  const dataFromFile1 = getData(fullFilepath1);
  const dataFromFile2 = getData(fullFilepath2);

  const compareResult = compare(dataFromFile1, dataFromFile2);
  //console.log(compareResult[1].children);
  console.log(format(options.format, compareResult));
};

export default gendiff;
