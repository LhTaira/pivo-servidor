const express = require('express');
const routes = express.Router();
const userRepository = require('../repository/UserRepository');
const mqtt = require('../../config/mqttServer');

routes.post('/saveUserPreferences', async (req, res, next) => {
    var body = req.body;

    mqtt.publishMessage('controlQuery',JSON.stringify(body));
    if(body.control == 'automatic') {
        mqtt.publishMessage('modeTopic','Go');
    } else if(body.control == 'manual') {
        mqtt.publishMessage('modeTopic','Stop');
    }
    userRepository.saveUserPreferences(body.lamina, body.control).then(response => res.json(response));
});

routes.get('/getUserPreferences', async (req, res, next) => {

    userRepository.getUserPreferences().then(response => res.json(response));
});


module.exports = routes;