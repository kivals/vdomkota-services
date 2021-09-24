const renderPage = (req, res) => {
  res.render('index', { title: 'Главная' });
};

module.exports = {
  renderPage,
};
