const express = require('express');
const route = express.Router();
const Account = require('../models/account');

route.get('/', (req, res) => {
  res.render('generic/home', {
    style: 'home.css'
  });
});

route.get('/login', (req, res) => {
  res.render('generic/login', {
    layout: 'skeleton',
    style: 'login.css',
    service: 'login'
  });
});

route.post('/login', (req, res) => {
  const email = req.body.txtEmail;
  const password = req.body.txtPassword;
  Account.createAccount(email, password).then(result => {
    res.send(result);
  }).catch(err => {
    res.send(err);
  });
});

module.exports = route;