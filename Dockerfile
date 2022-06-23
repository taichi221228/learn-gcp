FROM node:16.15.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

RUN ls

# COPY . ./

CMD [ "node", "server.js" ]