FROM node:14-alpine

WORKDIR /

COPY /../package.json .

RUN npm install

COPY . .

EXPOSE 3000

COPY ./docker-entrypoint.sh  /usr/local/bin/docker-entrypoint.sh
RUN chmod +x  /usr/local/bin/docker-entrypoint.sh
ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]

CMD [ "npm", "start" ]