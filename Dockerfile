FROM node

WORKDIR /app

COPY dist /app/dist
COPY yarn.lock /app/yarn.lock
COPY package.json /app/package.json
COPY server.js /app/server.js

RUN yarn

CMD [ "node", "server.js" ]