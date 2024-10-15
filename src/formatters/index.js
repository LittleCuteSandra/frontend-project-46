import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const formOutput = (format, data) => {
  if (format === 'plain') {
    return plain(data);
  }
  if (format === 'json') {
    return json(data);
  }
  return stylish(data);
};

export default formOutput;
