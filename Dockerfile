
ARG NODE_VERSION=20.11.0

FROM node:${NODE_VERSION}-alpine

ENV NODE_ENV production

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -g prisma

RUN npm install -g postcss-cli

COPY . .

RUN npx tailwindcss build -o ./src/app/globals.css

EXPOSE 3000

CMD npm run dev
