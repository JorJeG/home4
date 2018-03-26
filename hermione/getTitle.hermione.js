const { assert } = require('chai');

describe('Title', () => {
  it('Сравнивает title с ожидаемым', function () {
    return this.browser
      .url('/')
      .getTitle()
      .then((title) => {
        assert.equal(title, 'Домашнее задание по Nodejs');
      });
  });
});
