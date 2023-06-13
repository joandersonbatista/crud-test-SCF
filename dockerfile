FROM node:lts-alpine as base

FROM node:lts-alpine as development
ENV NODE_ENV=development
WORKDIR /src/app
COPY . .
RUN npm install
RUN npm run build
COPY . .

FROM node:lts-alpine as production
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /src/app
COPY --from=development /src/app/dist ./dist
CMD ["node", "dist/main.js"]