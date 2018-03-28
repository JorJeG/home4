const chai = require('chai');
const { expect } = chai;
const chaiAsPromised = require('chai-as-promised');

const showFiles = require('../../helpers/showFiles');

chai.use(chaiAsPromised);

describe('Функция для получения списка файлов', function() {
  // Функция получает на вход контрольную сумму коммита или дерева
  // На выходе получаем массив, либо ошибку

  it('Возвращает массив', function() {
    const files = showFiles('d8c07e1b8b1893c4cbbea8616f8d0615b7dafa61');

    return expect(files).to.eventually.deep.equal(
    [
      {
        "hash": "34a99ea3ea1785e4233a4c3e6d28483251318035",
        "name": ".editorconfig",
        "type": "blob",
      },
      {
        "hash": "79bb36d352611629f247e77e7a47f2e4504c7afa",
        "name": ".gitignore",
        "type": "blob",
      },
      {
        "hash": "f4795424d4eab7da783e64bb726bac2a0fd19197",
        "name": "package.json",
        "type": "blob",
      }
    ]);
  });

  it('Возвращает ошибку', function() {
    const files = showFiles('abcds');

    return expect(files).to.be.rejectedWith('Опаньки');
  });
});
