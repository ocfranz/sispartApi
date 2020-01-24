const express = require('express');
const router = express.Router();
const db = require('../../models');

router.get('/nacionalidades', async (req, res) =>{
    let nacionalidades = await db.nacionalidades.findAll();
    try{
        res.send({data : nacionalidades});
    } catch(err){
        res.send({message : err});
    }
})
router.post('/nacionalidades', async (req, res) =>{
    let { nacionalidad } = req.body;
    let nacionalidades = await db.nacionalidades.create({
        nacionalidad : nacionalidad
    });
    try{
        res.send({data : nacionalidades});
    } catch(err){
        res.send({message : err});
    }
})

router.delete('/nacionalidades/:id', async (req, res) =>{
    let { id } = req.params;
    let currentNacionalidad = await db.nacionalidades.findByPk(id);
    try{
        currentNacionalidad.destroy();
        res.send({status : 'deleted'});
    } catch(err){
        res.send({message : err});
    }  
})
module.exports = router;