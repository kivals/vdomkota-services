const axios = require('axios');
const { apiUrl } = require('../configuration');

const renderPage = async (req, res) => {
  //const catsInfo = await axios.get(`${apiUrl}/cat/slider-cats`);
  res.render('index', { title: 'Главная' });
};

module.exports = {
  renderPage,
};
