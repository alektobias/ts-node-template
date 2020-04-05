FROM node:alpine

WORKDIR /home/node/server

ADD package*.json ./

RUN yarn

COPY . .

USER node
