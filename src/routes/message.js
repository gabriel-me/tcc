const express = require('express');
const route = express.Router();

route.get('/', (req, res) => {
  res.render('message/message', {
    style: 'message.css'
  });
});

module.exports = route;