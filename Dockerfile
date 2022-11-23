FROM node:16.15.0-alpine as builder

EXPOSE 3000

RUN apk add --no-cache tini curl
RUN apk add bash

WORKDIR /suflex

ENTRYPOINT ["/sbin/tini", "--"]

ENV NODE_ENV=development

RUN apk add --no-cache git

USER node
RUN git config --global --add safe.directory /suflex
RUN ls -a

CMD [ "/suflex/init.sh" ]


