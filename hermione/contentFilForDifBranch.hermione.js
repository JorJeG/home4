const { assert } = require('chai');

describe('Содержимое файла', function() {
  it('Отображение содержимого файла в веткео тличной от ветки по умолчанию', function() {
    return this.browser
      .url('/')
      .click('.branch-item__link=feature_back-button')
      .click('.files-item__link_color_darkgreen=helpers')
      .click('.files-item__link=exec.js')
      .getText('.content')
      .then((content) => {
        assert.equal(content, `\
const util = require('util');
const exec = util.promisify(require('child_process').exec);

module.exports = exec;`);
      })
      .click('=Back')
      .getText('.files-list')
      .then((files) => {
        assert.equal(files, `\
exec.js\n\
showBranches.js\n\
showCommits.js\n\
showContent.js\n\
showFiles.js\n\
sortFiles.js`);
      });
  });
});
