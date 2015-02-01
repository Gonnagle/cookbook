## CookBook

A web application for documenting, sharing and discovering food recipes.


## A MEAN.JS application

The application uses the [MEAN.JS](http://meanjs.org/)-stack and is scaffolded using [meanjs-generator](http://meanjs.org/generator.html) with [Yeoman generator](http://yeoman.io/index.html).

The MEAN.JS stack consists of the following JavaScript-based projects: [MongoDB](http://www.mongodb.org/), [Node.js](http://www.nodejs.org/), [Express](http://expressjs.com/), and [AngularJS](http://angularjs.org/).

This is my first experiment with the full stack.

## Prerequisites

Make sure you have installed all these prerequisites on your development machine.
* Node.js - [Download & Install Node.js](http://www.nodejs.org/download/) and the npm package manager, if you encounter any problems, you can also use this [GitHub Gist](https://gist.github.com/isaacs/579814) to install Node.js.
* MongoDB - [Download & Install MongoDB](http://www.mongodb.org/downloads).
* Bower - You're going to use the [Bower Package Manager](http://bower.io/) to manage your front-end packages, in order to install it make sure you've installed Node.js and npm, then install bower globally using npm:

```
$ npm install -g bower
```

* Grunt - You're going to use the [Grunt Task Runner](http://gruntjs.com/) to automate your development process, in order to install it make sure you've installed Node.js and npm, then install grunt globally using npm:

```
$ sudo npm install -g grunt-cli
```

## Installation and configuration

To get the app running you need to have MongoDB up and running, source code copied (cloned), node modules and front-end libraries installed (npm & bower) and environment variables defined.

### Setting up MongoDB

MongoDB needs to be running on the same machine as the application. It's should be accessible on localhost:MONGODB_PORT. If environmental variable MONGODB_PORT is not defined. The default port  is used.

### Cloning The GitHub Repository
You can use Git to directly clone the cookbook repository:
```
$ git clone https://github.com/Gonnagle/cookbook.git cookbook
```
This will clone the latest version of the cookbook repository to a **cookbook** folder.

### Installing node modules and front-end libraries

Install the needed node modules with npm by running the following command in applications root folder:

```
$ npm install
```

Front-end libraries are installed in the similar manner with bower:

```
$ npm bower
```

### Configure environmental variables

The application uses following environmental variables:
* NODE_ENV (If not defined 'development' is invoked by default)
* APP_URL (http://cookbook.io)
* MONGODB_PORT (if not defined the default '27017' is used)
* PORT (the port the application is served at, if not defined the defaul '3000' is used)
* FACEBOOK_ID (App ID used for Facebook-login)
* FACEBOOK_SECRET

### Start the app with Grunt

The application can now be start with grunt simply by issuing the following command in the application folder:

```
$ grunt
```

Your application should run on the port you defined so in your browser just go to http://localhost:PORT (for example: [http://localhost:3000](http://localhost:3000))

### Running app as background process with forever

Forever can be used to run the app as a background process. Make sure you have forever installed:

```
$ npm install -g forever
```

You can start the server for example by issuing the following command in applications root folder:

```
$ forever --uid cookbook -w --watchDirectory /var/www/cookbook -a -l /var/logs/cookbook_forever.log -o /var/logs/cookbook_out.log -e /var/logs/cookbook_error.log start server.js
```

In the example the application is installed at **/var/www/cookbook** and the log-files are saved on **/var/logs**. The process is identified with the uid **cookbook**, the application folder is watched for changes with option **-w** and logs are set to be appended with option **-a**.

If needed, the server can be shut down by issuing the following command:

```
forever stop cookbook
```

## License
(The MIT License)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.