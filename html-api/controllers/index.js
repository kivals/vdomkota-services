const { getBaseCatInfo, getCatByAlias } = require('../services/cat.service');

const renderIndexPage = async (req, res, next) => {
  try {
    const shortCatInfo = await getBaseCatInfo();
    res.render('index', {
      title: 'Приют ВДомКота',
      cats: shortCatInfo,
    });
  } catch (e) {
    return next(e);
  }
};

const renderCatsPage = async (req, res, next) => {
  try {
    const shortCatInfo = await getBaseCatInfo();
    res.render('cats', {
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
    res.render('cat-id', {
      title: alias,
      cat,
    });
  } catch (e) {
    return next(e);
  }
};

const renderAboutPage = async (req, res, next) => {
  try {
    res.render('about', {
      title: 'О приюте',
    });
  } catch (e) {
    return next(e);
  }
};

module.exports = {
  renderIndexPage,
  renderCatsPage,
  renderCatByAliasPage,
  renderAboutPage,
};
