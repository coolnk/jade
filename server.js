var express = require('express');
var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var app = express();
var routes = require('./routes/index');



app.set('views', path.join(__dirname,'views'));
app.use('view engine', 'jade');
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({'extended': false}));
app.use(bodyParser.json());

app.use(bodyParser.json({type:'applicatin/vnd.api+json'}));

//app.get('/', routes);
app.listen(7070);
console.log("App listening on 7070");
