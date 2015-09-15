This is a simple NodeJS http server that echoes the client's external ip info back.

Install it:

npm install

cd node_modules/geoip-lite/

npm run-script updatedb 

(If you're on Ubuntu everything is probably 'nodejs' and not 'node', so make a hard link from node to nodejs to make the last command work)

ln /usr/bin/nodejs /usr/bin/node

Run it:

node whatsmyip.js
