const express = require('express');
const router = express.Router();

router.get('/',(req,res) =>{
    return res.send({message:'Everthing all right with root request GET  '})
});

router.post('/',(req,res) =>{
    return res.send({message:'Everthing all right with root request POST'})
});


module.exports = router;