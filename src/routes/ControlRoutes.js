const express = require('express');
const routes = express.Router();
const mqtt = require('../../config/mqttServer');

routes.post('/status', async (req, res, next) => {
    var body = req.body;

    var publish = mqtt.publishMessage('controlQuery',JSON.stringify(body));
    if(publish){
        res.json({status: 200, message: "Message published!"});
    } else {
        res.json({status: 500, message: "Failed to publish message"});
    }
    
});

routes.get('/getStatus', async (req, res, next) => {

    var response = mqtt.publishMessage('statusQuery','getStatus');
    console.log('Response: ',response)
    if(response != null){
        res.json({status: 200, message: JSON.stringify(response)});
    } else {
        res.json({status: 500, message: "Failed to publish message"});
    }
});


routes.post('/path', async (req, res, next) => {
    var body = req.body;
    var publish = mqtt.publishMessage('pathQuery',JSON.stringify(body));
    if(publish){
        res.json({status: 200, message: "Message published!"});
    } else {
        res.json({status: 500, message: "Failed to publish message"});
    }
    
});

module.exports = routes;