const express = require('express');
const axios = require('axios');
const { port, apiUrl } = require('./configuration');

const app = express();
const router = require('./routes');

const logger = require('./middlewares/logger');

const PORT = port || 8000;
const VIEWS_DIR = `${__dirname}/views/`;

app.set('views', VIEWS_DIR);
app.set('view engine', 'ejs');

// Пишем в лог все запросы
app.use(logger);
// app.use('/', router);
app.get('/', (req, res) => {
  console.log('BEFORE2');
  axios
    .get('http://api:3000/cat/slider-cats')
    .then((response) => {
      //console.log(response);
      res.json({
        data: response.data,
      });
    })
});

app.listen(PORT, () => {
  console.info(`Сервер запущен на ${PORT} порту`);
});
