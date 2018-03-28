const { assert } = require('chai');

describe('Выбор другой ветки', function() {
  it('Отображение ветки отличной от ветки по умолчанию', function() {
    return this.browser
      .url('/')
      .click('.branch-item__link=again-travis')
      .getText('.branch-item__link_color_red')
      .then((branch) => {
        assert.equal(branch, 'again-travis');
      });
  });
});
