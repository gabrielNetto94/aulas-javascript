const express = require('express');
const router = express.Router();
const Users = require('../model/users');
const bcrypt = require('bcrypt');

router.get('/',(req,res) =>{
    Users.find({},(err,data)=>{
        if(err) return res.send({error:'Error to find users!'});
        return res.send(data);
    });
});

//creates the user and returns what was created, but don't return the password
router.post('/create', (req,res) =>{
    const {email, password} = req.body;

    if(!email || !password) return res.send({error:'Needed email and password'})

    Users.findOne({email},(err,data) =>{//find email, if exists, return error: user already registered!
        if(err) return res.send({err:'error to search user!'});
        if(data) return res.send({err:'user already registered!'});

        Users.create({email: email, password:password},(err,data) =>{
            if(err) return res.send({err:'Error to create user!'});
            
            data.password = undefined;
            return res.send(data);
        }); //other way  Users.create(req.body);
    }); 
});

router.post('/auth', (req,res) => {
    const {email, password} = req.body;

    if(!email || !password) return res.send({error: "insufficient data"});
    
    Users.findOne({email},(err,data) => {
        if(err) return res.send({error: "error to find user!"});

        if(!data) return res.send({error: "user don't registred!"});

        bcrypt.compare(password,data.password, (err,same) => {

            if(!same) return res.send({error: "password wrong!"});

            data.password = undefined;
            return res.send(data);
        });      

    }).select('+password');//".select('+password')" = force findOne to return the password
});

router.get('/delete', (req,res) =>{
    
    Users.findByIdAndDelete(req.query.id, (err,data) =>{
        if(err) return res.send({error: 'unsuccesfuly delete user id:'+req.query.id});
        
        return res.send({ message:'User succesfuly deleted!', idDeleted: req.params.id});
    });
});

module.exports = router;