FROM node:13.12.0-alpine

RUN mkdir -p /usr/src/app && chown -R node:node /usr/src/app

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./

USER node

#for proxy ssl certificate
#RUN npm config set registry http://registry.npmjs.org/
#RUN npm set strict-ssl false
RUN npm i

# Copy app source code
COPY --chown=node:node . .

RUN npm run build
