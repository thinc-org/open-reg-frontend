FROM nginx
EXPOSE 5000
COPY /nginx/default.conf /etc/nginx/conf.d/default.conf
COPY /dist/open-reg-frontend /usr/share/nginx/html