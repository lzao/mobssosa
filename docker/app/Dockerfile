FROM node:14-alpine

WORKDIR /var/www/nestjs/mobssosa

COPY . .

RUN npm i -g @nestjs/cli

# RUN yarn add @nestjs/typeorm typeorm mysql2

# RUN yarn add @nestjs/config

# RUN yarn add @nestjs/elasticsearch @elastic/elasticsearch

# RUN yarn add class-validator class-transformer

RUN yarn install

EXPOSE 3000