const chai = require('chai');
const { expect } = chai;
const chaiAsPromised = require('chai-as-promised');

const showContent = require('./mocks/showContent');

chai.use(chaiAsPromised);

describe('Функция для получения содержимого файла', function() {
  // Функция получает на вход контрольную сумму файла
  // На выходе получаем строку

  it('Возвращает содержимое', function() {
    const content = showContent('c2658d7d1b31848c3b71960543cb0368e56cd4c7');

    return expect(content).to.eventually.equal('node_modules/\n');
  });

  it('Возвращает ошибку', function() {
    const content = showContent('abcds');

    return expect(content).to.be.rejectedWith('Опаньки');
  });
});
