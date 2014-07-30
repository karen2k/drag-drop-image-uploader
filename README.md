Drag&Drop Image Uploader
========================

Simple Drag&Drop image uploader with separate back-end and front-end apps on RoR and Require.js, Backbone.js and React.js to demonstrate ways of thinking.<br>
Written on pure JavaScript as required, but CoffeeScript is preferable for me.

Main features and tech stack
----------------------------
* Drag&Drop image uploader
* <a href="https://github.com/karen2k/hello/tree/master/Front">Separate front-end app</a>
* Require.js: loading js files on demand
* <a href="https://github.com/karen2k/hello/tree/master/App">RoR back-end</a>: RESTfull API
* Backbone.js: models and collections connection with back-end
* Rect.js (no XJS): layout components

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
* Move to CoffeeScript and add on-the-fly CoffeeScript –> JS conversion
