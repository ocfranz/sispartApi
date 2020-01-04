const express = require('express');
const router = express.Router();

const Departamentos = require('../models/common/Departamento');

router.get('/', async (req, res) =>{
    let deparments = await Departamentos.findAll();
    try{
        res.send({data : deparments});
    } catch(err){
        res.send({message : err});
    }
})

module.exports = router;