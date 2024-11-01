const express = require('express');
const RolService = require('../services/rolService');

const router = express.Router();

router.get('/', async (req, res) => {
    const rols = await RolService.getAllRols();
    res.json(rols);
});

router.get('/:id', async (req, res) => {
    const rol = await RolService.getAllRols(req.params.id);
    if(rol){
        res.json(rol);
    }else{
        res.status(404).json({message: 'Rol not found'});
    }
});

router.post('/', async (req, res) => {
    const newRol = await RolService.createRol(req.body);
    res.status(201).json(newRol);
});

router.put('/:id', async (req, res) => {
    const updatedRol = await RolService.updateRol(req.params.id, req.body);
    if(updatedRol){
        res.json(updatedRol);
    }else{
        res.status(404).json({message: 'Rol not found'});
    }
});

router.delete('/:id', async (req, res) => {
    const deleted = await RolService.deleteRol(req.params.id);
    if(deleted){
        res.status(204).send();
    }else{
        res.status(404).json({message: 'Rol not found'});
    }
});

router.get('/users/:rolId', async (req, res) => {
    try {
        const result = await RolService.getUsersByRolId(req.params.rolId);
        res.json(result);
    }catch (error) {
        if(error.message==='Rol not found'){
            res.status(404).json({error:error.message});
        }else{
            res.status(500).json({error:error.message});
        }
    }

});

module.exports = router;