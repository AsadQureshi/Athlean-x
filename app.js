var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var users = require('./routes/users');
var app = express();
var cons = require('consolidate');
var user = require('./routes/user');
var login = require('./routes/login');
var menu = require('./routes/menu');
var workout = require('./routes/workout')

// view engine setup
app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.send("Welcome to Athlean-x");
});
// app.get('/user', user.viewUser);
// app.post('/user/add', user.addUser);
// app.get('/login', login.viewLogin);
// app.post('/record', login.addlogin);
// app.get('/workout', workout.viewWorkout);
// app.post('/exercises', workout.addworkout);


app.get('/test-schema', workout.testnestedSchema);
//app.get('/view/menu', menu.viewMenu);

app.get('/user', function(req, res) {
    res.redirect('/view/user');
});

module.exports = app;
app.listen(3000, function() {
    console.log('message:"Server is live and Ready" ')
});
