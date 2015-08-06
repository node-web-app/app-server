app-server
---

[![build status](https://travis-ci.org/node-web-app/app-server.svg?branch=master)](https://travis-ci.org/node-web-app/app-server)

Just a server which delegates/routes the responsibility if known; i.e. the information is available in [routes.js](https://github.com/node-web-app/app-server/blob/master/routes.js).
The `app-server` can be considered as a [tomcat server](http://tomcat.apache.org/) and the `routes.js` as the [web.xml](https://cloud.google.com/appengine/docs/java/config/webxml).

The modules required in the `routes.js` can be considered as `.jar` or `.war` files, each one serving their own purpose, mainly seperation of concerns.

These modules themselves can be deployed as as application if desired. They are responsible fore their content and their quality.
They are fully testable, unit tests with coverage report and desired coverage threshold, functional test across multiple browsers in saucelabs.

Benefits?
---
* seperation of concerns
* modular code
* plug and play
* faster turn around and productivity

Quality assurance?
---
* let the tool validate the rules to the extream
* strict code reviews by experienced eyes.

Why there are no tests for this repo?
---
Work in progress.
Actually there will only be few of tests. Most of the test will be in their respective modules.

Is there any working prototype?
---
You bet.

https://damp-brook-3753.herokuapp.com/ is the host, it will get redirected to https://damp-brook-3753.herokuapp.com/module-x
[as desired](https://github.com/node-web-app/app-server/blob/master/routes.js#L7-L9).
```js
app.get('/', function(req, res, next) {
  res.redirect('/module-x');
});
```
And it would greet with `Hello from module x`.

The other accessible path would be https://damp-brook-3753.herokuapp.com/module-y.
It would greet with `Hello from module y`.

**It hosted as a free app in [heroku](https://www.heroku.com/), and thus goes to sleep if not accessed for a long. It might take a while if the `dynos` were asleep, when accessed. Please bear with it**.

This is not manually deployed but from [travis](https://travis-ci.org/node-web-app/app-server). Please refer the build logs for details.

