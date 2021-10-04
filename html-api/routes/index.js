const express = require('express');

const router = express.Router();
const {
  renderIndexPage,
  renderCatsPage,
  renderCatByAliasPage,
} = require('../controllers');

router.get('/', async (req, res) => {
  renderIndexPage(req, res);
});

router.get('/cats', async (req, res) => {
  renderCatsPage(req, res);
});

router.get('/cats/:alias', async (req, res) => {
  renderCatByAliasPage(req, res);
});

module.exports = router;
