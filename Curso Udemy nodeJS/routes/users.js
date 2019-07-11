const express = require('express');
const router = express.Router();

router.get('/',(req,res) =>{
    return res.send({message:'Everthing all right with users request GET'})

});


router.post('/',(req,res) =>{
    return res.send({message:'Everthing all right with users request POST'})

});

router.post('/create', (req,res) =>{
    return res.send({message:'your user is created! through request POST'});

});

module.exports = router;