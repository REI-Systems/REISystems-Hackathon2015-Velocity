var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');
var routes = require('./routes/index');
var shelters = require('./routes/shelters'); 
var findMyFamily = require('./routes/findFamily');
var findcert = require('./routes/findcert');
var findshelter=require('./routes/findshelter');
var signUp = require('./routes/signUp');
var addFamily = require('./routes/addFamily');
var MongoClient = require('mongodb').MongoClient
, format = require('util').format;


var app = express();

//Set Port for the App
app.set('port', process.env.PORT || 1337)

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/Resources')));

//app.use(express.favicon());
app.use('/', routes);
app.use('/shelters', shelters);
app.use('/findFamily', findMyFamily);
app.use('/findcert', findcert);
app.use('/findshelter',findshelter);
app.use('/signUp', signUp);
app.use('/signUp/addfamily', addFamily);


//find cert
app.post('/', function(req,res){
    res.send("CertID:"+req.body.CertID);
    //console.log(req.body);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

//Mongo

//Ajax Calls
app.get('/FindaFamilymember', function(req, res){
    MongoClient.connect('mongodb://reihack15.cloudapp.net:27017/test', function (err, db) {
        if (err) {
            throw err;
        } else {
            var data;

            if(req.FamilyId){
                data = db.collectons('signup').find({FamilyId: req.FamilyId});
            }
            else if(req.PrimaryPhonenumber){
                data = db.signup.find({PrimaryPhonenumber:req.PrimaryPhonenumber});
            }
            else if(req.LastName){
                data = db.signup.find({LastName:req.LastName});
            }
        }
        db.close();
        console.log(data);
        if(data) return data;
    });

});

app.post('/SignupMember', function(req, res){
   MongoClient.connect('mongodb://reihack15.cloudapp.net:27017/test', function (err, db) {
        if (err) {
            throw err;
        } else {
            db.collection('signup').insertOne({
                "FirstName": req.FirstName,
                "LastName": req.LastName,
                "Address":{
                    "street" : req.street,
                    "city" : req.state,
                    "zipCode": req.zipcode
                },
                "PrimaryPhonenumber":req.PrimaryPhonenumber,
                "email" : req.email
            },function(err, result){
                assert.equal(err, null);
                return result;
            });
        }
        db.close();
        if(data) return data;
    });
});


//module.exports = app;
//Creating Server 
/*var Server = http.createServer(app);
Server.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
<<<<<<< HEAD
});

//Sockets 
var io = require('socket.io')(Server);
var shelter_Controller = require('./Sockets/sheltersSocketsController');
/* var shelters = io
        .of('/sheltering')
        .on('connction', function(socket){
        shelter_Controller.respond(shelters, socket);
    }); */
/*io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});*/


module.exports = app;
