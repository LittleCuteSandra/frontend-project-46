const getJSONFormat = (data) => {
  const dataToObj = data.map((node) => {
    const negativeKey = `- ${node.key}`;
    const positiveKey = `+ ${node.key}`;
    switch (node.status) {
      case 'deleted':
        return { [negativeKey]: node.value };
      case 'added':
        return { [positiveKey]: node.value };
      case 'changed':
        return { [negativeKey]: node.value1, [positiveKey]: node.value2 };
      case 'nested':
        return { [node.key]: getJSONFormat(node.children) };
      default:
        return { [node.key]: node.value };
    }
  })
  return dataToObj;
};

export default getJSONFormat;
