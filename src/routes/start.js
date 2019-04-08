const express = require('express');
const route = express.Router();

route.get('/', (req, res) => {
    res.render('start/home');
});

route.get('/login', (req, res) => {
    res.render('start/login');
});

module.exports = route;