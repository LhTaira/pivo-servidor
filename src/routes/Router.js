const express = require('express');
const userRoutes = require('./UserRoutes');
const homeRoutes = require('./HomeRouter');
const controlRoutes = require('./ControlRoutes');

const router = express.Router();

router.get('/', (req, res) => {   
    res.json({
        server: "Pipe"
    });
});
module.exports = (app) => {
    app.use('/', [userRoutes], [homeRoutes], [controlRoutes]);
};