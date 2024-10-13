import stylish from './stylish.js';
import plain from './plain.js';

const formOutput = (format, data) => {
  if (format === 'plain') {
    return plain(data);
  }
  return stylish(data);
};

export default formOutput;
