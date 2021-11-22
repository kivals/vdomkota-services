const axios = require('axios');
const { apiUrl } = require('../configuration');

/**
 * TODO это не должно быть тут -нарушение S  SOLID
 * Сформировать имя кота согласно полу
 * @param cat объект кота
 * @return {string} Имя
 */
const getSexCatName = (cat) => {
  if (cat.isKitten) {
    return `Котенок ${cat.name}`;
  }
  return cat.sex === 'male' ? `Кот ${cat.name}` : `Кошка ${cat.name}`;
};

const getShortCatInfo = async () => {
  const response = await axios.get(`${apiUrl}cat/short-cat-info`);
  console.log(response.data);
  // Преобразуем формат полученных данных для html
  return response.data.map((cat) => ({
    ...cat,
    name: getSexCatName(cat),
    photoPath: cat.photos[0].path,
  }));
};

const getCatByAlias = async (alias) => {
  const response = await axios.get(`${apiUrl}cat/${alias}`);
  return response.data[0];
};

module.exports = {
  getShortCatInfo,
  getCatByAlias,
};
