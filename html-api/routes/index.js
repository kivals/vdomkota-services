const express = require('express');

const router = express.Router();
const { renderIndexPage, renderFindPage } = require('../controllers');

router.get('/', async (req, res) => {
  renderIndexPage(req, res);
});

router.get('/find', async (req, res) => {
  renderFindPage(req, res);
});

module.exports = router;
