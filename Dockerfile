FROM node:16.19.0

COPY . /plan
WORKDIR /plan
# CMD npm install && node.server.js
RUN npm install
CMD ["node", "server.js"]