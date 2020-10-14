FROM node:14.13.1-alpine3.10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .
