const express = require('express');
const route = express.Router();

route.get('/', (req, res) => {
  res.render('notification/notification', {
    style: 'notification.css'
  });
});

module.exports = route;