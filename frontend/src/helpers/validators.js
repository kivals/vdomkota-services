export const isExistKey = (obj, value) => {
  return Object.keys(obj).some((key) => obj[key] === value);
};
