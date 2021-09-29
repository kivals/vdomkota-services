const axios = require('axios');
const { apiUrl } = require('../configuration');

const getShortCatInfo = async () => {
  const response = await axios.get(`${apiUrl}cat/short-cat-info`);
  // Преобразуем формат полученных данных для html
  return response.data.map((cat) => ({
    ...cat,
    photoPath: cat.photos[0].path,
  }));
};

module.exports = {
    getShortCatInfo,
}
