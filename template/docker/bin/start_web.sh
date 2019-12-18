#!/bin/bash
uwsgi --ini /app/uwsgi.ini --processes=$UWSGI_PROCESSES
cd /app/frontend
export HOST=0.0.0.0
export BASE_URL=http://localhost:8000
pm2 start npm -i 2 --name=nuxt -l /tmp/nuxt.log -- start
cd /app
./manage.py collectstatic --no-input
./manage.py migrate --no-input
rm -Rf /dkdata/nginx.sock
nginx
tail -f /dkdata/uwsgi.log
