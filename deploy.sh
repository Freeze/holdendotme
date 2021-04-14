#!/usr/bin/env bash

cd /root/holdendotme
npm run build
cd build
cp -R * /var/www/html
echo("All done!")
exit
