#!/bin/sh

# Recreate the nginx access and error log symlinks that knative mounts an emptydir over
# Nginx won't start if these files don't exist, even if logging is off or sent to /dev/stdout
mkdir -p /var/log/nginx
ln -sf /dev/stdout /var/log/nginx/access.log
ln -sf /dev/stderr /var/log/nginx/error.log

# Pass through for the dockerfile cmd
exec "$@"
