# syntax=docker/dockerfile:1

ARG NODE_VERSION=20.18.0

FROM node:${NODE_VERSION}-alpine


WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Expose the port that the application listens on.
EXPOSE 3000

# Run the application.
CMD npm run start:dev
