const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/api');
require('dotenv').config();
const path = require('path');

// Create an instance of the express framework
const app = express();


// Grab the port variable  from the environment variables
const port = process.env.PORT || 5000;

//connect to the database
mongoose.connect(process.env.DB, { useNewUrlParser: true })
  .then(() => console.log(`Database connected successfully`))
  .catch(err => console.log(err));

//since mongoose promise is depreciated, we overide it with node's promise
mongoose.Promise = global.Promise;

// Handle CORS related issues
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());


app.use('/api', routes);


app.use((err, req, res, next) => {
  console.log(err);
  next();
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});