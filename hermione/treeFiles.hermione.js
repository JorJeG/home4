const { assert } = require('chai');

describe('Дерево файлов', function() {
  it('Отображает корректный список файлов и папок', function() {
    return this.browser
      .url('/')
      .click('.files-item__link_color_darkgreen=config')
      .getText('.files-list')
      .then((files) => {
        assert.equal(files, `\
constants.js\n\
webpack.config.dev.js\n\
webpack.config.prod.js`)
      })
      .click('=Back')
      .getText('.files-list')
      .then((files) => {
        assert.equal((files), `\
config\n\
helpers\n\
routes\n\
src\n\
test\n\
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
webpack.config.js`)
      });
  });
});
