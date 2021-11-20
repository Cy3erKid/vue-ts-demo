FROM node:16-alpine as build

ENV SERVER_PATH /var/www/html/server

WORKDIR ${SERVER_PATH}

COPY package*.json .

RUN npm install pm2 -g

RUN npm install && npm cache clean --force

COPY . .



# CMD [ "pm2","start","ecosystem.json" ]
CMD pm2 start ecosystem.json && tail -f /dev/null

EXPOSE 3000