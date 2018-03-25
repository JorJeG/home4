[![Build Status](https://travis-ci.org/JorJeG/home4.svg?branch=master)](https://travis-ci.org/JorJeG/home4)

Чтобы сделать локально контейнер и его запустить используются команды
```bash
docker build -t <name> . # делаем в папке проекта
docker run --name <name_process> -p 3000:3000 <name> # запускаем контайнер
```
Теперь мы можешь обращаться к нашему приложению по адресу http://localhost:3000

Чтобы проверить на ошибки, запускаем два линтера(ESLint, Stylelint) одной командой
```bash
npm run lint
```

При разработке использовался локальный репозиторий, путь к которому указывается
в config/constants.js,
```javascript
const PATH_TO_REPO = '.';
```
когда нужно выложить на heroku этот путь заменяется на тот репозиторий, который мы клонируем
в docker контайнере.
```javascript
const PATH_TO_REPO = './wallet-app/';
```

Для сборки проекта используется webpack
```bash
npm run dev # работает в watch режиме
npm run prod # минификация кода
```

После сборки проект и замены константы можем локально запустить
```bash
npm start
```

Для своего приложения на heroku определил stack через heroku cli,
иначе heroku автоматически определяет приложение как node_js.
```bash
heroku apps:stacks:set container --app <name-app>
```
##### update:
можно добавить в файл app.json:
```json
{
  "stack": "container"
}
```
что для pull-request review apps позволит задать правильный контейнер
