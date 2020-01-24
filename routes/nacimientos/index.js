const express = require('express');
const router = express.Router();
const db = require('../../models');
/**
 * Get all the nacidos
 */
router.get('/nacidos', async (req, res) =>{
    let nacidos = await db.nacidos.findAll();
    try{
        res.send({data : nacidos});
    } catch(err){
        res.send({message : err});
    }
})
/**
 * Get especific nacido
 */
router.get('/nacidos/:id', async (req, res) =>{
    let { id } = req.params;
    let nacidos = await db.nacidos.findAll();
    try{
        res.send({data : nacidos});
    } catch(err){
        res.send({message : err});
    }
})

router.post('/nacidos', async (req, res) => {
    
})
/**
 * Get 
 */
router.get('/padres', async (req, res) =>{
    let padres = await db.padres.findAll();
    try{
        res.send({data : padres});
    } catch(err){
        res.send({message : err});
    }
})
router.get('/madres', async (req, res) =>{
    let madres = await db.madres.findAll();
    try{
        res.send({data : madres});
    } catch(err){
        res.send({message : err});
    }
})

module.exports = router;