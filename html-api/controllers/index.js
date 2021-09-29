const { getShortCatInfo, getCatByAlias } = require('../services/cat.service');

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

const renderCatByAliasPage = async (req, res, next) => {
  try {
    const { alias } = req.params;
    const cat = await getCatByAlias(alias);
    console.log(cat);
    res.render('cat-id', {
      title: 'Ищем хозяев',
      cat,
    });
  } catch (e) {
    return next(e);
  }
};

module.exports = {
  renderIndexPage,
  renderFindPage,
  renderCatByAliasPage,
};
