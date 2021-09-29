const express = require('express');

const router = express.Router();
const { renderPage } = require('../controllers');

router.get('/', async (req, res) => {
  renderPage(req, res);
});

module.exports = router;
