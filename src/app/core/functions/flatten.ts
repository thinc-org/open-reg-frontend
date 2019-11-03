export const flatten = (target: object) => {
  const delimiter = '.';
  const output = {};

  const step = (object: object, prev?: string, currentDepth?: number) => {
    currentDepth = currentDepth || 1;
    Object.keys(object).forEach(key => {
      const value = object[key];
      const newKey = prev ? prev + delimiter + key : key;
      const isarray = Array.isArray(value);
      const type = Object.prototype.toString.call(value);
      const isbuffer =
        value != null &&
        value.constructor != null &&
        typeof value.constructor.isBuffer === 'function' &&
        value.constructor.isBuffer(value);
      const isobject = type === '[object Object]' || type === '[object Array]';
      if (!isarray && !isbuffer && isobject && Object.keys(value).length) {
        return step(value, newKey, currentDepth + 1);
      }
      output[newKey] = value;
    });
  };
  step(target);
  return output;
};
