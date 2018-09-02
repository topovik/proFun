server { 
    listen 80 default_server; 
    root /var/www/proFun; 
    server_name profun.app www.profun.app; 
    index index.html index.htm;
 
 location /static {
    root /var/www/proFun/static;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header Host $http_host;
    proxy_set_header X-NginX-Proxy true;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
 
 }
 
 listen [::]:443 ssl ipv6only=on; # managed by Certbot
     listen 443 ssl; # managed by Certbot
     ssl_certificate /etc/letsencrypt/live/profun.app/fullchain.pem; # managed by Certbot
     ssl_certificate_key /etc/letsencrypt/live/profun.app/privkey.pem; # managed by Certbot
     include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
     ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
 
 
 location / {
         proxy_pass http://localhost:3001;
         proxy_set_header X-Real-IP $remote_addr;
         proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
         proxy_set_header Host $http_host;
         proxy_set_header X-NginX-Proxy true;
         proxy_http_version 1.1;
         proxy_set_header Upgrade $http_upgrade;
         proxy_set_header Connection "upgrade";
 
   if ($request_method = 'OPTIONS') {
         add_header 'Access-Control-Allow-Origin' '*';
         add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
         add_header 'Access-Control-Max-Age' 1728000;
         add_header 'Content-Type' 'text/plain; charset=utf-8';
         add_header 'Content-Length' 0;
         return 204;
      }
      if ($request_method = 'POST') {
         add_header 'Access-Control-Allow-Origin' '*';
         add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
         add_header 'Access-Control-Allow-Headers' 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range';
         add_header 'Access-Control-Expose-Headers' 'Content-Length,Content-Range';
      }
      if ($request_method = 'GET') {
         add_header 'Access-Control-Allow-Origin' '*';
         add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
         add_header 'Access-Control-Allow-Headers' 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range';
         add_header 'Access-Control-Expose-Headers' 'Content-Length,Content-Range';
   }
 }
 }
 