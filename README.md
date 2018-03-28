[![Build Status](https://travis-ci.org/JorJeG/home4.svg?branch=master)](https://travis-ci.org/JorJeG/home4)

Чтобы локально всё работало нужно склонировать репозиторий командой и дополнительно в отдельную папку
```bash
git clone git@github.com:JorJeG/home4.git home4 && cd home4 && git clone --mirror git@github.com:JorJeG/home4.git ./wallet-app/
```

### Инфраструктура

Чтобы сделать локально контейнер и его запустить используются команды
```bash
docker build -t <name> . # делаем в папке проекта
docker run --name <name_process> -p 3000:3000 <name> # запускаем контейнер
```
Теперь мы можешь обращаться к нашему приложению по адресу http://localhost:3000

Чтобы проверить на ошибки, запускаем два линтера(ESLint, Stylelint) одной командой
```bash
npm run lint
```

При разработке использовался локальный репозиторий, путь к которому указывается
в config/constants.js,
```javascript
const PATH_TO_REPO = './wallet-app/';
```

Для сборки проекта используется webpack
```bash
npm run dev # работает в watch режиме
npm run prod # минификация кода
```

После сборки проекта, запускаем старт сервера
```bash
npm start
```

Для своего приложения на heroku определил stack через heroku cli,
иначе heroku автоматически определяет приложение как node_js.
```bash
heroku apps:stacks:set container --app <name-app>
```

### Тесты

Для запуска модульных тестов нужно запустить команду
```bash
npm install
npm run test
```

Для запуска интеграционных тестов, которые написаны для локального репозитория нужно:

```bash
npm install selenium-standalone@latest -g
selenium-standalone install
selenium-standalone start # установить и запустить selenium-standalone

npm install hermione -g # установить hermione

npm install
npm run prod

hermione --set common # выполнить в папке репозитория
```
