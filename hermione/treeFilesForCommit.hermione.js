const { assert } = require('chai');

describe('Дерево файлов', function() {
  it('Работа с деревом файлов для коммитов из ветки', function() {
    return this.browser
      .url('/')
      .click('.commit-item__link=Тест')
      .getText('.files-list')
      .then((files) => {
        assert.equal(files, `\
config\n\
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
heroku.yml\n\
package-lock.json\n\
package.json\n\
server.js\n\
webpack.config.js`)
      })
      .click('.files-item__link_color_darkgreen=config')
      .getText('.files-list')
      .then((files) => {
        assert.equal(files, `\
webpack.config.dev.js\n\
webpack.config.prod.js`)
      })
      .click('=Back')
      .getText('.files-list')
      .then((files) => {
        assert.equal((files), `\
config\n\
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
heroku.yml\n\
package-lock.json\n\
package.json\n\
server.js\n\
webpack.config.js`)
      });
  });
});
