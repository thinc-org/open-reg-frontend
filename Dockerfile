FROM node:alpine as builder
WORKDIR /app
COPY package.json .
RUN yarn
COPY . .
RUN yarn run build --prod

FROM nginx
EXPOSE 4200
COPY /nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist/open-reg-frontend /usr/share/nginx/html