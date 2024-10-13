const spacesNumberOnLevel = 4;
const leftMove = 2;
const deepenLevel = 1;

const statuses = {
  unchanged: '  ',
  added: '+ ',
  deleted: '- ',
};

const getSpaces = (depth) => {
  const spacesNumber = depth * spacesNumberOnLevel - leftMove;
  return ' '.repeat(spacesNumber);
};

const outputObj = (value, depth) => {
  if (value instanceof Object) {
    const objKeys = Object.keys(value);
    const objTree = objKeys.map((key) => {
      if (value[key] instanceof Object) {
        return `${getSpaces(depth)}  ${key}: ${outputObj(value[key], depth + deepenLevel)}`;
      }
      return `${getSpaces(depth)}  ${key}: ${value[key]}`;
    }).join('\n');
    return `{\n${objTree}\n${getSpaces(depth).slice(0, -leftMove)}}`;
  }
  return value;
};

const getStringElement = (depth, status, key, value) => `${getSpaces(depth)}${statuses[status]}${key}: ${outputObj(value, depth + deepenLevel)}`;

const buildTree = (data, depth = 1) => {
  const tree = data.map((item) => {
    if (item.status === 'nested') {
      return `${getSpaces(depth)}  ${item.key}: ${buildTree(item.children, depth + 1)}`;
    }
    if (item.status === 'changed') {
      return `${getStringElement(depth, 'deleted', item.key, item.value1)}\n${getStringElement(depth, 'added', item.key, item.value2)}`;
    }
    return getStringElement(depth, item.status, item.key, item.value);
  }).join('\n');

  return `{\n${tree}\n${depth === 1 ? '' : getSpaces(depth).slice(0, -leftMove)}}`;
};

export default buildTree;
