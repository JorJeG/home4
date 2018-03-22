const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || '3000';

app.set('views', path.join(__dirname, 'static', 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
  res.render('index', { title: 'Hello' });
});

app.listen(PORT);
