
var http = require('http')
var path = require('path')
var express = require('express')
var socketio = require('socket.io')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
const session = require('express-session');

var routes = require('./Aplicacion')

var port = 8082
var app = express()
var Server = http.createServer(app)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/', routes);
app.use(express.static('client'))
app.use(session({secret: 'ssshhhhh'}));

var io = socketio(Server)

Server.listen(port, function () {
    console.log('My app is ready to run on port: '+port)
})
