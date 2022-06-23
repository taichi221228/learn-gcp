FROM node:16.15.0

WORKDIR /usr/src/app

RUN ls .

COPY . ./

RUN npm ci --only=production

CMD [ "node", "server.js" ]