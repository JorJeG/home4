const { assert } = require('chai');

describe('Содержимое файла', function() {
  if('Отображение содержимого файла в ветке отличглй отв етки по умолчанию', function() {
    return this.browser
      .url('/')
      .click('.branch-item__link=test-heroku')
      .click('.files-item__link_color_darkgreen=src')
      .click('.files-item__link=index.html')
      .getText('.content')
      .then((content) => {
        assert.equal(content, `\
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Тест</title>
</head>
<body>
  <div class="app">
    <h1>Hello</h1>
  </div>
</body>
</html>`);
      })
      .click('=Back')
      .getText('.files-list')
      .then((files) => {
        assert.equal(files, `\
css\n\
favicon\n\
fonts\n\
img\n\
js\n\
index.html`);
      });
  });
});
