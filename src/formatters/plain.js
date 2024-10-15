const checkOnType = (value) => {
  if (typeof value === 'object') {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return value;
};

const checkParent = (parent, key) => {
  if (parent.length === 0) {
    return `${key}`;
  }
  return `${parent}.${key}`;
};

const getPlaneFormat = (data, parent = '') => {
  const list = data.map((node) => {
    switch (node.status) {
      case 'deleted':
        return `Property '${checkParent(parent, node.key)}' was removed`;
      case 'added':
        return `Property '${checkParent(parent, node.key)}' was added with value: ${checkOnType(node.value)}`;
      case 'changed':
        return `Property '${checkParent(parent, node.key)}' was updated. From ${checkOnType(node.value1)} to ${checkOnType(node.value2)}`;
      case 'nested':
        return getPlaneFormat(node.children, `${checkParent(parent, node.key)}`);
      default:
        return '';
    }
  }).filter((node) => node.length !== 0).join('\n');

  return list;
};

export default getPlaneFormat;
