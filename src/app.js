// Modules
const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const generic = require('./routes/generic');
const user = require('./routes/user');
const task = require('./routes/task');
const project = require('./routes/project');
const firebase = require('firebase');
const app = express();

// Connection firebase
firebase.initializeApp({
  serviceAccount: "./tasks-system-23a7d-firebase-adminsdk-ghbbh-e2908b7e54.json",
  databaseURL: 'https://tasks-system-23a7d.firebaseio.com'
});

// Config
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// View engine
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')))

// Routes
app.use('/', generic);
app.use('/user/', user);
app.use('/task/', task);
app.use('/project/', project);

// Server
app.listen('8081', () => {
  console.log('rum');
});