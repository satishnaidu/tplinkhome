FROM resin/raspberrypi3-alpine-node:slim
WORKDIR /usr/src/app
COPY package.json package.json
RUN npm install
COPY . .
CMD ["npm", "start"]
