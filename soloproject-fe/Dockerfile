FROM node:10 as frontend
WORKDIR /app
COPY package.json /app
RUN npm install
RUN npm build
COPY . /app
CMD npm start
EXPOSE 3000