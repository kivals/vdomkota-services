const axios = require('axios');
const { apiUrl } = require('../configuration');

const renderPage = async (req, res) => {
  const response = await axios.get(`${apiUrl}cat/slider-cats`);
  // Преобразуем формат полученных данных для html
  const prettyCats = response.data.map(cat => ({
    ...cat,
    photoPath: cat.photos[0].path,
  }));
  res.render('index', {
    title: 'Главная',
    cats: prettyCats,
  });
};

module.exports = {
  renderPage,
};
