FROM node:8
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD node send.js
EXPOSE 8083

