const sortFiles = require('../../helpers/sortFiles');
const { assert } = require('chai');

describe('Тестирование функции сортировки', function() {
  // Так как после команды git ls-tree нам приходит уже отсортированный массив файлов, то
  // задача этой функции отсортировать файлы и папки

  it('Должна возвращать массив', function() {
    const arrayFiles = [
      {type: 'blob', hash: '54f5c53', name: 'app.json'},
      {type: 'tree', hash: '22ad543', name: 'config'},
      {type: 'tree', hash: '234cf42', name: 'src'},
    ];
    const sorted = sortFiles(arrayFiles);
    assert.isArray(sorted);
  });

  it('Должна сортировать массив', function() {
    const arrayFiles = [
      {type: 'blob', hash: '54f5c53', name: 'app.json'},
      {type: 'tree', hash: '22ad543', name: 'config'},
      {type: 'tree', hash: '234cf42', name: 'src'},
    ];
    const sorted = sortFiles(arrayFiles);

    assert.deepEqual(sorted, [
      {type: 'tree', hash: '22ad543', name: 'config'},
      {type: 'tree', hash: '234cf42', name: 'src'},
      {type: 'blob', hash: '54f5c53', name: 'app.json'},
    ]);
  });
});
