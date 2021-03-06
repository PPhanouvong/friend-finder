
// DEPENDENCIES

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//Tells node that we are creating an "express" server
var app = express();

//Sets an initial port.
var PORT = process.env.PORT || 8000;

//Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//Router
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

//Listener
app.listen(PORT, function () {
    console.log('App listening on PORT: ' + PORT);
});
