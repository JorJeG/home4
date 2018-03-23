FROM node:slim

# Определяем рабочую директорию для приложения
WORKDIR /usr/src/app

# Копируем из текущей директории в рабочую директорию(WORKDIR)
COPY . .

# Устанавливаем git
RUN apt-get update && apt-get install -y git
# Устанавливаем зависимости
RUN npm install
# Запускаем сборку
RUN npm run prod
# Клонируем репозиторий с которым будем работать
RUN git clone https://github.com/JorJeG/wallet-app.git
RUN cd ./wallet-app/ && for branch in  $(git branch -r | grep -v 'HEAD\|master'); do git branch --track ${branch##*/} $branch; done

# Запускаем контейнер
CMD npm start
