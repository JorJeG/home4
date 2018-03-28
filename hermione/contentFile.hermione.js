const { assert } = require('chai');

describe('Содержимое файла', function() {
  it('Отбражается содержимое файла в ветке', function() {
    return this.browser
      .url('/')
      .click('.files-item__link_color_darkgreen=config')
      .click('.files-item__link_color_blue=constants.js')
      .getText('.content')
      .then((content) => {
        assert.equal(content, `\
const PATH_TO_REPO = './wallet-app/';

module.exports = { PATH_TO_REPO };`)
      })
      .click('=Back')
      .getText('.files-list')
      .then((files) => {
        assert.equal(files, `\
constants.js\n\
webpack.config.dev.js\n\
webpack.config.prod.js`);
    });
  });
});
