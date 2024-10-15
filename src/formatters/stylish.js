const spacesNumberOnLevel = 4;
const leftMove = 2;
const deepenLevel = 1;

const statuses = {
  unchanged: '  ',
  added: '+ ',
  deleted: '- ',
};

const getSpacesForValue = (depth) => {
  const spacesNumber = depth * spacesNumberOnLevel - leftMove;
  return ' '.repeat(spacesNumber);
};

const getSpacesForBracket = (depth) => {
  if (depth !== 1) {
    const spacesNumber = depth * spacesNumberOnLevel - leftMove * 2;
    return ' '.repeat(spacesNumber);
  }
  return '';
};

const outputObj = (value, depth) => {
  if (value instanceof Object) {
    const objKeys = Object.keys(value);
    const objTree = objKeys.map((key) => {
      if (value[key] instanceof Object) {
        return `${getSpacesForValue(depth)}  ${key}: ${outputObj(value[key], depth + deepenLevel)}`;
      }
      return `${getSpacesForValue(depth)}  ${key}: ${value[key]}`;
    }).join('\n');
    return `{\n${objTree}\n${getSpacesForValue(depth).slice(0, -leftMove)}}`;
  }
  return value;
};

const getStringElement = (depth, status, key, value) => `${getSpacesForValue(depth)}${statuses[status]}${key}: ${outputObj(value, depth + deepenLevel)}`;

const buildTree = (data, depth = 1) => {
  const tree = data.map((item) => {
    switch (item.status) {
      case 'nested':
        return `${getSpacesForValue(depth)}  ${item.key}: ${buildTree(item.children, depth + 1)}`;
      case 'changed':
        return `${getStringElement(depth, 'deleted', item.key, item.value1)}\n${getStringElement(depth, 'added', item.key, item.value2)}`;
      default:
        return getStringElement(depth, item.status, item.key, item.value);
    }
  }).join('\n');

  return `{\n${tree}\n${getSpacesForBracket(depth)}}`;
};

export default buildTree;
