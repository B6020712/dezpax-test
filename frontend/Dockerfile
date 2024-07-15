FROM node:18-alpine

EXPOSE 3000

RUN mkdir -p /var/www

RUN npm cache clean --force

WORKDIR /var/www/frontend
COPY . .
RUN npm install

COPY . .

CMD ["npm", "run", "dev", "/var/www/frontend"]
