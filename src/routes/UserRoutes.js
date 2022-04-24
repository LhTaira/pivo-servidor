const express = require('express');
const routes = express.Router();
const userRepository = require('../repository/UserRepository');
const mqtt = require('../../config/mqttServer');

routes.post('/saveUserPreferences', async (req, res, next) => {
    var body = req.body;

    userRepository.saveUserPreferences(body.lamina, body.control).then(response => res.json(response));
    var response = mqtt.publishMessage('controlQuery',JSON.stringify(body));
    if(body.control == 'automatic') {
        mqtt.publishMessage('modeTopic','Go');
    } else if(body.control == 'manual') {
        mqtt.publishMessage('modeTopic','Stop');
    }
    console.log('Response: ',response)
    if(response != null){
        res.json({status: 200, message: JSON.stringify(response)});
    } else {
        res.json({status: 500, message: "Failed to publish message"});
    }
});

routes.get('/getUserPreferences', async (req, res, next) => {

    userRepository.getUserPreferences().then(response => res.json(response));
});


module.exports = routes;