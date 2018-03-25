
describe('Ветки', function() {
  it('Отображаются ветки по умолчанию', function() {
    return this.browser
      .url('http://localhost:3000')
      .getText('.branch-item')
      .then((v) => {

      });
  });
});
