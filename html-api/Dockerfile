FROM node:13.12.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./

#for proxy ssl certificate
RUN npm config set registry http://registry.npmjs.org/
RUN npm set strict-ssl false
RUN npm install

RUN npm i -g nodemon

COPY . .
