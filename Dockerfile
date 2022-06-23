FROM node:16.15.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

# COPY . ./

CMD [ "node", "server.js" ]