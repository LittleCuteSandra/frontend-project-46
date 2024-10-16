import fs from 'fs';
import gendiff from '../index.js';

const expectedData = fs.readFileSync('/home/little_cute_chamomile_sandra/frontend-project-46/__fixtures__/expectedStylish.txt', 'utf8');

test('compare plain JSON files', () => {
  expect(gendiff('__fixtures__/file1.json', '__fixtures__/file2.json', 'stylish')).toEqual(expectedData);
});

test('compare plain YML files', () => {
  expect(gendiff('__fixtures__/file1.yml', '__fixtures__/file2.yml', 'stylish')).toEqual(expectedData);
});
