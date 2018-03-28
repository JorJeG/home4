const { assert } = require('chai');

describe('Ветки', function() {
  it('Отображение ветки по умолчанию', function() {
    return this.browser
      .url('/')
      .getText('.branch-item__link_color_red')
      .then((branch) => {
        assert.equal(branch, 'master');
      })
      .getText('.commit-item')
      .then((commits) => {
        assert.isNotEmpty(commits);
      })
      .getText('.files-list')
      .then((files) => {
        assert.equal(files, `\
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
webpack.config.js`);
      });
  });
});
