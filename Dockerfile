FROM node:alpine as builder
WORKDIR /app
COPY /dist .

FROM nginx
EXPOSE 5000
COPY /nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/open-reg-frontend /usr/share/nginx/html