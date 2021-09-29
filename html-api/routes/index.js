const express = require('express');

const router = express.Router();
const { renderIndexPage, renderFindPage, renderCatByAliasPage } = require('../controllers');

router.get('/', async (req, res) => {
  renderIndexPage(req, res);
});

router.get('/find', async (req, res) => {
  renderFindPage(req, res);
});

router.get('/cat/:alias', async (req, res) => {
  renderCatByAliasPage(req, res);
});

module.exports = router;
