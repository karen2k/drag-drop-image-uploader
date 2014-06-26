Nginx config
============

```php```
server {
  listen 80;
  server_name hello.dev;
  root /Library/WebServer/Documents/hello/;

  location /front {
    root /Library/WebServer/Documents/hello;
  }

  location / {
    proxy_set_header X-Forwarded-Host $host;
    proxy_set_header X-Forwarded-Server $host;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header Host $host;
    proxy_pass http://127.0.0.1:3000; # Rails app
  }
}
```

Start server
============
```php```
cd App
bundle install
rake db:migrate
rake db:seed
rails s
```

Need to be done
===============

* Node.js app as a CoffeeScript files compiler
* Cross browser upload form
* Read image locally and show while uploading
* Add event bus for React
* Paging & Infinite scroll down