const chai = require('chai');
const { expect } = chai;
const chaiAsPromised = require('chai-as-promised');

const showCommmits = require('./mocks/showCommits');

chai.use(chaiAsPromised);

describe('Функция для получения списка коммитов для ветки', function() {
  // Функция получает на вход контрольную сумму ветки
  // На выходе получаем отформатированный массив

  it('Возвращает отформатированный массив коммитов', function() {
    const commits = showCommmits('16c32a5');

    return expect(commits).to.eventually.deep.equal(
      [
        {
          "hash": "16c32a5648390751e77428aacc6d11819dba143e",
          "name": "Georgiy Starkov",
          "title": "Тест image",
        },
        {
          "hash": "88b5ddab001dae0256d53bb13cfd33e088b95ae0",
          "name": "Georgiy Starkov",
          "title": "Добавит статику",
        },
        {
          "hash": "773921a49483d717d83dbca7cb324dc4ffb1788f",
          "name": "Georgiy Starkov",
          "title": "Merge branch 'master' of github.com:JorJeG/home4 into test-travis",
        },
        {
          "hash": "2f831d159747e59a34aab60438e3a377d67cd42c",
          "name": "Georgiy Starkov",
          "title": "Добавит файл для работы с пулл реквестами",
        },
        {
          "hash": "d7496951a87148d984ea8331a0a30007e567c50a",
          "name": "Georgiy Starkov",
          "title": "Тест",
        },
        {
          "hash": "9ea5643da2e515fa06ba9a013d1b0ac7ea5a619a",
          "name": "Georgiy Starkov",
          "title": "Изменит конфиг travis",
        },
        {
          "hash": "bca81facf4fc88875cf56f0cbc2842fba7beb2ec",
          "name": "Georgiy Starkov",
          "title": "Добавит Readme",
        },
        {
          "hash": "522df75c4ca6464168838d359e68462f98ae3dd0",
          "name": "Georgiy Starkov",
          "title": "Добавит файлы для взаимодействия travis heroku",
        },
        {
          "hash": "187b3b78bbff954001378622e3eecb758616632b",
          "name": "Georgiy Starkov",
          "title": "Заглушка для тестов",
        },
        {
          "hash": "c53d0513250fc36a4a9e4127e94e46ec08f3623b",
          "name": "Georgiy Starkov",
          "title": "Добавит файл для автоматической сборки docker",
        },
        {
          "hash": "4c573db000d8402eac8b52f13f72b76cb9d2d7cb",
          "name": "Georgiy Starkov",
          "title": "Удалит неиспользуемый плагин при продакшене",
        },
        {
          "hash": "f368a7a9e6016e9600f99972921a5c93d1887d9f",
          "name": "Georgiy Starkov",
          "title": "Добавит файлы для докеризации",
        },
        {
          "hash": "5f2811a184e1b7d372c52de5a504694ac4584fa1",
          "name": "Georgiy Starkov",
          "title": "Добавит простой сервер",
        },
        {
          "hash": "a75961e5f2bf69534fad77d8c457c1b3c463cd21",
          "name": "Georgiy Starkov",
          "title": "Копирует html в static",
        },
        {
          "hash": "0262a4cf40ec039bbfeb7932122e61279dfc344a",
          "name": "Georgiy Starkov",
          "title": "Добавит плагин для копирования файлов в static",
        },
        {
          "hash": "2feb620db07e11e88d2e9035a95a256a9974457f",
          "name": "Georgiy Starkov",
          "title": "Добавит плагин для очистки static папки",
        },
        {
          "hash": "a00a3795de66fb8d0277646c8446a522ce3ec3a3",
          "name": "Georgiy Starkov",
          "title": "Добавит сборку js файлов в разных режимах",
        },
        {
          "hash": "f1f5bda82de72ed7485a9be3090759201188fd12",
          "name": "Georgiy Starkov",
          "title": "Добавит для линтеров static папку в игнор",
        },
        {
          "hash": "637d4bb5831c9f505b050092d1564269f340e7ea",
          "name": "Georgiy Starkov",
          "title": "Разделит конфиги для dev и prod",
        },
        {
          "hash": "ea34268ec3198ff54ed80ec7aa7cc0d8c2e517f6",
          "name": "Georgiy Starkov",
          "title": "Добавит сборку CSS файлов на базе webpack",
        },
        {
          "hash": "a588eab71508bd538b13ffaa3b0cca4cda25ee22",
          "name": "Georgiy Starkov",
          "title": "Добавит скрипт npm run lint",
        },
        {
          "hash": "4e5c408380fe98856d424034de1ce2616f7ba1f4",
          "name": "Georgiy Starkov",
          "title": "Добавит npm-run-all",
        },
        {
          "hash": "0a386266d7fbadf88e4692e042d3756f510c93df",
          "name": "Georgiy Starkov",
          "title": "Добавит Stylelint с конфигом standard",
        },
        {
          "hash": "da43127e6aa95d8f299bb3d0ccb5634207d00d3e",
          "name": "Georgiy Starkov",
          "title": "Добавит глобальные переменные для ESLint",
        },
        {
          "hash": "b1b2efbac9d44c3a5cd775b8152cfde493ff1d64",
          "name": "Georgiy Starkov",
          "title": "Добавит ESLint",
        },
        {
          "hash": "d8c07e1b8b1893c4cbbea8616f8d0615b7dafa61",
          "name": "Georgiy Starkov",
          "title": "Initial commit",
        },
      ]
    );
  });

  it('Возвращает ошибку', function() {
    const commits = showCommmits('abcds');

    return expect(commits).to.be.rejectedWith('Опаньки');
  });
});
