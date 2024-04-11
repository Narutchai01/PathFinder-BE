FROM node:20.10.0-alpine


WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY ./dist /usr/src/app/dist



CMD [ "node", "--watch"  ,"./dist/server.js" ]