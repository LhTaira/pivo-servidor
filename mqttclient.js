const mqtt = require('mqtt');
const mqttClient = mqtt.connect('mqtt://broker.emqx.io:1883/mqtt', { username: 'admin', password: 'public' });

const pathTopic = 'pathQuery';
const statusTopic = 'statusQuery';
const responseStatusTopic = 'statusResponse';
const controlTopic = 'controlQuery';

const mockStatus = {
    pipe: true,
    pump: true,
    arm: true
}

mqttClient.on('connect', function () {
    console.log('Client connected to Mqtt broker');

    mqttClient.subscribe(statusTopic);
    mqttClient.subscribe(controlTopic);
    mqttClient.subscribe(pathTopic);

    
});

mqttClient.on('message', function (topic, message) {

    console.log('Received query from server:-', message.toString())
    console.log('Topic client: ', topic);
    if(topic == statusTopic){
        mqttClient.publish(responseStatusTopic, JSON.stringify(mockStatus));
        console.log('Published response:-', JSON.stringify(mockStatus))
    } else if (topic == pathTopic){
        console.log('Received path command: ', message.toString());
    } else if (topic == controlTopic){
        console.log('Received control command: ', message.toString());
    }

});
