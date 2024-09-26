FROM node:18.18.1-alpine3.18
RUN addgroup app && adduser -S -G app app
USER app
WORKDIR /app
COPY --chown=app:node package*.json .
RUN npm install
COPY --chown=app:node . .
EXPOSE 3012

ENTRYPOINT [ "npm", "run", "build" ]