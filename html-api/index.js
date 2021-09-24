const express = require('express');

const app = express();
const router = require('./routes');

const logger = require('./middlewares/logger');

const PORT = process.env.PORT || 8000;
const VIEWS_DIR = `${__dirname}/views/`;

app.set('views', VIEWS_DIR);
app.set('view engine', 'ejs');

// Пишем в лог все запросы
app.use(logger);
app.use('/', router);

app.listen(PORT, () => {
  console.info(`Сервер запущен на ${PORT} порту`);
});
