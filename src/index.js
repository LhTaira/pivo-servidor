const bodyParser = require('body-parser')
const configRoutes = require('./routes/Router');
const mqtt = require('../config/mqttServer');
const express = require('express');
const cors = require('cors');

var app = express()
app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./routes/Router')(app);
configRoutes(app)

mqtt.startMqtt();

app.listen(3000)