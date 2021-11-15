## Stable alpine releases
FROM nginx:1.20

ENV NGINX_WEB_ROOT=/www
RUN mkdir -p $NGINX_WEB_ROOT
WORKDIR $NGINX_WEB_ROOT

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./entrypoint.sh /usr/local/bin/entrypoint.sh
RUN mkdir -p /var/cache/nginx
RUN mkdir -p /data/nginx/cache

ENV UNAME=www
ENV GNAME=www
ENV UID=10001
ENV GID=10001
RUN set -ex; \
    addgroup --gid "$GID" "$GNAME"; \
    adduser --disabled-password --shell "/sbin/nologin" --gecos "" --home "/var/log/nginx" --ingroup "$GNAME" --no-create-home --uid "$UID" "$UNAME"

RUN set -ex; \
    chown -R $UNAME:$GNAME $NGINX_WEB_ROOT; \
    chmod -R 755 $NGINX_WEB_ROOT; \
    chown -R $UNAME:$GNAME  /var/log; \
    chown -R $UNAME:$GNAME  /var/run/; \
    chown -R $UNAME:$GNAME  /data/nginx/cache; \
    chown -R $UNAME:$GNAME  /var/cache/nginx; \
    chown -R $UNAME:$GNAME  /etc/nginx/; \
    chmod 755 /usr/local/bin/entrypoint.sh

USER $UID:$GID

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]

## Start nginx specifying our nginx.conf location rather than openresty default: "/usr/local/openresty/nginx/conf/nginx.conf"
CMD ["nginx", "-g", "daemon off;", "-c", "/etc/nginx/nginx.conf"]
