const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app  = express();

//connection database
const url = 'mongodb+srv://admin:admin@cluster0-lbokr.mongodb.net/test?retryWrites=true&w=majority';
const options = { reconnectTries: Number.MAX_VALUE, reconnectInterval: 500, poolSize: 5, useNewUrlParser:true }

mongoose.connect(url,options);
mongoose.set('useCreateIndex', true);

mongoose.connection.on('error',(err) =>{
    console.log('cannot connect to mongoDB'+ err);
})

mongoose.connection.on('disconnect',() =>{
    console.log('disconnected application from the database '+ err);
})

mongoose.connection.on('connected',() =>{
    console.log('your application is connected to mongoDB');
});

//bodyParser to parser request by POST
/*
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const indexRoute = require('./routes/index.js');
const usersRoute = require('./routes/users.js');

app.use('/', indexRoute);
app.use('/users',usersRoute);
*/
app.get('/',(req,res) => {
    return res.send({message: 'olá'});
});

app.listen(3000);

module.exports = app;