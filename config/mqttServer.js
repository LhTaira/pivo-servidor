require('dotenv').config();
const mqtt = require('mqtt');
const mqttClient = mqtt.connect('mqtt://broker.emqx.io:1883/mqtt', { username: 'admin', password: 'public' });


const responseControlTopic = 'controlResponse';
const modeTopic = 'modeTopic';
const responseStatusTopic = 'statusResponse';
const statusFrontResponse = 'statusFrontResponse'

function startMqtt() {
    console.log('Starting MQTT...')
    mqttClient.on('connect', function () {
        console.log('Server connected to Mqtt broker');
        mqttClient.subscribe(responseControlTopic);
        mqttClient.subscribe(responseStatusTopic);
    });
    
    console.log('MQTT started')
    mqttClient.on('message', function (topic, message) {
        console.log('Received query from client: -', message.toString());
        console.log('Topic: ', topic);
        if(topic == responseControlTopic){

            mqttClient.publish(responseStatusTopic, message.toString());

        } else if(topic == responseStatusTopic) {
            console.log("Published message: ", message.toString());
            mqttClient.publish(statusFrontResponse, message.toString());

        }
        
        console.log('Responded to client');
      
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
        
        return false;
    }
}


module.exports = {startMqtt, publishMessage};