FROM node:16.15.0

WORKDIR /usr/src/app

COPY . .

RUN npm ci --only=production

RUN npm run build

CMD [ "node", "server.js" ]