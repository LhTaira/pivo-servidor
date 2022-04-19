const express = require('express');
const userRoutes = require('./UserRoutes');
const homeRoutes = require('./HomeRouter');

const router = express.Router();

router.get('/', (req, res) => {   
    res.json({
        server: "Pipe"
    });
});
module.exports = (app) => {
    app.use('/', [userRoutes], [homeRoutes]);
};