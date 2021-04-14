#!/usr/bin/env bash

cd /root/holdendotme
git pull
npm run build
cd build
cp -R * /var/www/html
