import fs from 'fs';
import path from 'path';
import gendiff from '../index.js';

const getFullFilepath = (filepath) => path.resolve(process.cwd(), filepath);
const expectedData = fs.readFileSync(getFullFilepath('__fixtures__/expectedPlain.txt'), 'utf8');

test('compare plain JSON files', () => {
  expect(gendiff('__fixtures__/file1.json', '__fixtures__/file2.json', 'plain')).toEqual(expectedData);
});

test('compare plain YML files', () => {
  expect(gendiff('__fixtures__/file1.yml', '__fixtures__/file2.yml', 'plain')).toEqual(expectedData);
});
