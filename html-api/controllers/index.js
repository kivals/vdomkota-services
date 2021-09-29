const { getShortCatInfo } = require('../services/cat.service');

const renderIndexPage = async (req, res, next) => {
  try {
    const shortCatInfo = await getShortCatInfo();
    res.render('index', {
      title: 'Главная',
      cats: shortCatInfo,
    });
  } catch (e) {
    return next(e);
  }
};

const renderFindPage = async (req, res, next) => {
  try {
    const shortCatInfo = await getShortCatInfo();
    res.render('find', {
      title: 'Ищем хозяев',
      cats: shortCatInfo,
    });
  } catch (e) {
    return next(e);
  }
};

module.exports = {
  renderIndexPage,
  renderFindPage,
};
