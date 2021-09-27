FROM node:14-alpine

WORKDIR /usr/src/app

COPY package*.json ./

#for proxy ssl certificate
RUN npm config set registry http://registry.npmjs.org/

RUN npm install

COPY . .
