FROM node:20.10.0


WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY ./dist /usr/src/app/dist


EXPOSE 8080

CMD [ "node", "server.js" ]
