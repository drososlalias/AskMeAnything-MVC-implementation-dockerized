FROM node:16.2.0

WORKDIR  /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8765

CMD [ "npm" , "start" ]