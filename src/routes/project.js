const express = require('express');
const route = express.Router();

route.get('/', (req, res) => {
  res.render('project/projects', {
    style: 'project.css'
  });
});

module.exports = route;