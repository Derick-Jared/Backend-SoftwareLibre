const express = require('express');
const UserService = require('../services/userService');

const router = express.Router();

router.get('/', async (req, res) => {
    const users = await UserService.getAllUsers();
    res.json(users);
});

router.get('/:id', async (req, res) => {
    const user = await UserService.getUserById(req.params.id);
    if(user){
        res.json(user);
    }else{
        res.status(404).json({message: 'User not found'});
    }
});

router.post('/', async (req, res) => {
    const newUser = await UserService.createUser(req.body);
    res.status(201).json(newUser);
});

router.put('/:id', async (req, res) => {
    const updatedUser = await UserService.updateUser(req.params.id, req.body);
    if(updatedUser){
        res.json(updatedUser);
    }else{
        res.status(404).json({message: 'User not found'});
    }
});

router.delete('/:id', async (req, res) => {
    const deleted = await UserService.deleteUser(req.params.id);
    if(deleted){
        res.status(204).send();
    }else{
        res.status(404).json({message: 'User not found'});
    }
});

module.exports = router;