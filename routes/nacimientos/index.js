const express = require('express');
const router = express.Router();
const db = require('../../models');
router.get('/', async (req, res) =>{
    let nacidos = await db.nacidos.findAll();
    try{
        res.send({data : nacidos});
    } catch(err){
        res.send({message : err});
    }
})

module.exports = router;