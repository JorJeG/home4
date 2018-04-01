const express = require('express');

const router = require('./routes/index');

const app = express();
const { PORT, HOST } = require('./config/constants');

app.set('views', 'static/views');
app.set('view engine', 'pug');

app.use(express.static('static'));
app.use(router);

app.listen(PORT, HOST);
