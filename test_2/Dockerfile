FROM node:16-alpine3.14

RUN apk update && apk add bash

WORKDIR /usr/app
COPY package.json .

RUN npm install

COPY . .

EXPOSE 7070
CMD [ "node", "." ]