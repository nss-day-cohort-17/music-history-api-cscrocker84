'use strict'

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// <Include the router index file>

const routes = require('./routes')

let app = express();

// <Setup your routes middleware>

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/v1/', routes)

// <catch any undefined routes with a 404 middleware>

app.use(function(req, res, next) {
    var err = new Error('No Soup for You!');
    err.status = 404;
    next(err);
})

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log('listening on port ${port} in this bodacious env: ${process.env.NODE_ENV}');
})
// <Handle any errors that occur in the routing with error handlers defined at the bottom of our
// middleware stack>
