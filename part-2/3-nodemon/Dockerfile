FROM node:20 AS base
WORKDIR /usr/src/app
COPY package* .
RUN npm install


FROM base as development
COPY . .
EXPOSE 3000
CMD ["npx", "nodemon", "index.js"]



