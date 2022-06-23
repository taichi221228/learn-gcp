FROM node:16.15.0

WORKDIR /usr/src/app

RUN ls .

COPY . ./

RUN ls .

RUN ls

RUN npm ci --only=production

CMD [ "node", "server.js" ]