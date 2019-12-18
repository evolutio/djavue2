#!/bin/bash
cd /app/frontend
export API_MOCK=1
export NUXT_PUBLIC_PATH=""
export HOST=0.0.0.0
npm run build
pm2 start npm -i 2 --name=nuxt -l /tmp/nuxt.log -- start
pm2 logs
