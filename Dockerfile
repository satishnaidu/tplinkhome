FROM resin/raspberrypi3-alpine-node:slim
WORKDIR /usr/src/app
COPY package.json package.json
RUN npm install
COPY node_modules node_modules
COPY . .
EXPOSE 3001
CMD ["npm", "start"]
