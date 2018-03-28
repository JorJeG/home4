const chai = require('chai');
const { expect } = chai;
const chaiAsPromised = require('chai-as-promised');

const showBranches = require('../../helpers/showBranches');

chai.use(chaiAsPromised);

describe('Функция для получения списка веток', function() {
  // Функция получает на вход контрольную сумму коммита или дерева
  // На выходе получаем массив, либо ошибку

  it('Возвращает массив', function() {
    const files = showBranches('master');

    return expect(files).to.eventually.deep.equal(
      [
        {
        "commit": "4be10187a7e9785385f7b14aa480976485a39959",
         "name": "again-travis",
         "selected": false,
        },
        {
         "commit": "d3f19ab5bb49d4497da943edbd4e5aa606ce439f",
         "name": "feature_back-button",
         "selected": false,
        },
        {
         "commit": "3187791397e57fc6eafa22933e0086dffed3700e",
         "name": "feauture_change-by-commit",
         "selected": false,
        },
        {
         "commit": "6ff779344313487d6d91bbe33a4b8f4f61c8c5b7",
         "name": "hermione-test",
         "selected": false,
        },
        {
         "commit": "b74d032485c28ec8707d10060f0a09595d107ee7",
         "name": "master",
         "selected": true,
        },
        {
         "commit": "18986912e670e503aaf8603abcae917c24dc97c7",
         "name": "test-heroku",
         "selected": false,
        },
        {
         "commit": "59320b9916df4d31f08ec9a84c51a1208be7ef5b",
         "name": "test-test",
         "selected": false,
        },
        {
         "commit": "16c32a5648390751e77428aacc6d11819dba143e",
         "name": "test-travis",
         "selected": false,
        },
        {
         "commit": "92d5308ad62e5b62faba988998731838f89f818a",
         "name": "unit-test",
         "selected": false,
        },
      ]);
  });

  it('Возвращает ошибку', function() {
    const files = showBranches('abcds');

    return expect(files).to.be.rejectedWith('Опаньки');
  });
});
