import _ from 'lodash';

const compare = (data1, data2) => {
  const allKeys = _.union(Object.keys(data2), Object.keys(data1));
  const sortedKeys = _.sortBy(allKeys);

  const compareResult = sortedKeys.map((key) => {
    if ((data1[key] instanceof Object) && (data2[key] instanceof Object)) {
      return { key, status: 'nested', children: compare(data1[key], data2[key]) };
    }
    if (!Object.hasOwn(data2, key)) {
      return { key, value: data1[key], status: 'deleted' };
    }
    if (!Object.hasOwn(data1, key)) {
      return { key, value: data2[key], status: 'added' };
    }
    if (data1[key] === data2[key]) {
      return { key, value: data1[key], status: 'unchanged' };
    }
    return {
      key, value1: data1[key], value2: data2[key], status: 'changed',
    };
  });

  return compareResult;
};

export default compare;
