require('dotenv').config();
const mqtt = require('mqtt');
const mqttClient = mqtt.connect('ws://localhost:8083/mqtt', { username: process.env.LOGIN, password: process.env.PASSWORD });

const controlTopic = 'controlQuery';
const responseControlTopic = 'controlResponse';
const statusTopic = 'statusQuery';
const responseStatusTopic = 'statusResponse';

function startMqtt() {
    mqttClient.on('connect', function () {
        console.log('Server connected to Mqtt broker');
        mqttClient.subscribe(controlTopic);
        mqttClient.subscribe(responseControlTopic);
        mqttClient.subscribe(statusTopic);
        mqttClient.subscribe(responseStatusTopic);
    });
    
    
    mqttClient.on('message', function (topic, message) {
        console.log('Received query from client: -', message.toString());
    
        if(topic == statusTopic){

            mqttClient.publish(responseStatusTopic, message.toString());

        } else if(topic == controlTopic) {

            mqttClient.publish(responseControlTopic, message.toString());

        }
        
        console.log('Responded to client');
        mqttClient.end();
    });
}

async function publishMessage(topic, message) {

    try {
        console.log(topic)
        mqttClient.publish(topic, message);
        console.log('Published message: ',message);
        return true;
    } catch(ex) {
        console.log('Failed to publish message: ', message);
        mqttClient.end();
        return false;
    }
}


module.exports = {startMqtt, publishMessage};