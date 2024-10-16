import gendiff from '../index.js';
// eslint-disable-next-line
import expectedJSON from '../__fixtures__/expectedJSON.json';

test('compare plain JSON files', () => {
  expect(gendiff('__fixtures__/file1.json', '__fixtures__/file2.json', 'json')).toEqual(JSON.stringify(expectedJSON));
});

test('compare plain YML files', () => {
  expect(gendiff('__fixtures__/file1.yml', '__fixtures__/file2.yml', 'json')).toEqual(JSON.stringify(expectedJSON));
});
