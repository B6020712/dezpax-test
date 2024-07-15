FROM node:18-alpine

EXPOSE 8000

RUN mkdir -p /var/www

WORKDIR /var/www/backend
COPY . .
RUN npm install

CMD ["npm", "run", "dev", "/var/www/backend"]

