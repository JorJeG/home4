const { assert } = require('chai');

describe('Дерево файлов', function() {
  it('Работа с деревом файлов для коммита из ветки отличной от ветки по умолчанию', function() {
    return this.browser
      .url('/')
      .click('.branch-item__link=feature_back-button')
      .click('.commit-item__link=Заглушка для тестов')
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
Dockerfile\n\
package-lock.json\n\
package.json\n\
server.js\n\
webpack.config.js`);
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
Dockerfile\n\
package-lock.json\n\
package.json\n\
server.js\n\
webpack.config.js`)
      });

  });
});
