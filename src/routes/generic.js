const express = require('express');
const route = express.Router();

route.get('/', (req, res) => {
  res.render('generic/home', {
    style: 'home.css'
  });
});

route.get('/login', (req, res) => {
  res.render('generic/login', {
    layout: 'skeleton',
    style: 'login.css'
  });
});

module.exports = route;