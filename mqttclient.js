const mqtt = require('mqtt');
const mqttClient = mqtt.connect('ws://localhost:8083/mqtt', { username: 'admin', password: 'pipeadmin' });

const controlTopic = 'controlQuery';
const responseControlTopic = 'controlResponse';

mqttClient.on('message', function (topic, message) {

    console.log('Received response from server:-', message.toString())
    mqttClient.end();
});

mqttClient.on('connect', function () {
    console.log('Client connected to Mqtt broker');

    mqttClient.subscribe(responseControlTopic);

    mqttClient.publish(controlTopic, 'Hello server, can you hear me?');
    console.log('Published to server...');
});