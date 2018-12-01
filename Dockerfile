FROM resin/raspberrypi3-alpine-node:slim
WORKDIR /usr/src/app
COPY package.json package.json
RUN npm install && cp node_modules node_modules
COPY . .
CMD ["npm", "start"]
