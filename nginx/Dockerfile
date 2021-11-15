## Stable alpine releases
FROM nginx:1.20

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./entrypoint.sh /usr/local/bin/entrypoint.sh

#RUN mkdir -p /data/nginx/cache

CMD ["nginx", "-g", "daemon off;"]
