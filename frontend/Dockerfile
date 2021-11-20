FROM node:14.17.5 as build

WORKDIR /var/www/html/app

COPY package*.json ./

RUN npm install && npm cache clean --force

RUN npm rebuild node-sass


EXPOSE 8080

COPY . ./var/www/html/app

CMD ["npm","run","serve"]


# FROM nginx as production-stage
# RUN mkdir /app
# COPY --from=build-stage /app/dist /app
# COPY nginx.conf /etc/nginx/nginx.conf