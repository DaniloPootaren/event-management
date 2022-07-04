
FROM strapi/base:alpine

WORKDIR /app

COPY ./package.json ./

RUN yarn install --ignore-engines

COPY . .

ENV NODE_ENV production

RUN yarn build

CMD ["yarn", "start"]
