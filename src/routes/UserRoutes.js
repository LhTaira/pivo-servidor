const express = require('express');
const routes = express.Router();
const userRepository = require('../repository/UserRepository');

routes.post('/saveUserPreferences', async (req, res, next) => {
    var body = req.body;

    userRepository.saveUserPreferences(body.lamina, body.irrigation).then(response => res.json(response));
});

routes.get('/getUserPreferences', async (req, res, next) => {

    userRepository.getUserPreferences().then(response => res.json(response));
});


module.exports = routes;