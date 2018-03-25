FROM node:alpine

# Определяем рабочую директорию для приложения
WORKDIR /usr/src/app

# Копируем из текущей директории в рабочую директорию(WORKDIR)
COPY . .

# Устанавливаем git
RUN apk add --no-cache git
# Устанавливаем зависимости
RUN npm install
# Запускаем сборку
RUN npm run prod
# Клонируем репозиторий с которым будем работать
RUN git clone --mirror https://github.com/JorJeG/wallet-app.git wallet-app/.git

# Запускаем контейнер
CMD npm start
