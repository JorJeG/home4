FROM node:slim

WORKDIR /usr/src/app

COPY . .

RUN npm install --quiet
RUN npm run prod

CMD npm start
