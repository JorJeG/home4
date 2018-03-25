const { assert } = require('chai');

describe('Title', () => {
  it('Сравнивает title с ожидаемым', function () {
    return this.browser
      .url('http://localhost:3000')
      .getTitle()
      .then((title) => {
        assert.equal(title, 'Домашнее задание по Nodejs');
      });
  });
});
