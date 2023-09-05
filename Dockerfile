FROM --platform=linux/amd64 node:20-alpine
WORKDIR /usr/app

ARG ENV_FILE

COPY package.json .
RUN npm i
RUN npm i pm2 -g

## following 3 lines are for installing ffmepg
RUN apk update
RUN apk add
RUN apk add ffmpeg

RUN mkdir uploads

COPY . .

CMD ["pm2-runtime", "index.js"]