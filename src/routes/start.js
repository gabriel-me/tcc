const express = require('express');
const route = express.Router();

route.get('/login', (req, res) => {
    res.render('start/login');
});

module.exports = route;