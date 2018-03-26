const { assert } = require('chai');

describe('Дерево файлов', function() {
  it('Работа с деревом файлов в ветке отличной от ветки по умолчанию', function() {
    return this.browser
      .url('/')
      .click('.branch-item__link=test-test')
      .click('.files-item__link_color_darkgreen=src')
      .getText('.files-list')
      .then((files) => {
        assert.equal(files, `\
css\n\
favicon\n\
fonts\n\
img\n\
js\n\
views`);
      })
      .click('=Back')
      .getText('.files-list')
      .then((files) => {
        assert.equal(files, `\
config\n\
src\n\
.dockerignore\n\
.editorconfig\n\
.eslintignore\n\
.eslintrc.js\n\
.gitignore\n\
.stylelintignore\n\
.stylelintrc.js\n\
.travis.yml\n\
Dockerfile\n\
README.md\n\
app.json\n\
heroku.yml\n\
package-lock.json\n\
package.json\n\
server.js\n\
webpack.config.js`);
      })
  });
});
