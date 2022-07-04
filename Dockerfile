# FROM node:12

# WORKDIR /app

# COPY package.json ./

# COPY . .

# ENV NODE_ENV production

# RUN npm config set ca=""

# RUN npm set strict-ssl false


# RUN npm install 

# CMD ["yarn", "start"]

FROM strapi/base:alpine

WORKDIR /app

COPY ./package.json ./

RUN yarn install --ignore-engines

COPY . .

ENV NODE_ENV production

RUN yarn build

CMD ["yarn", "start"]
