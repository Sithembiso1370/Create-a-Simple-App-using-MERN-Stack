const express = require('express');
require('dotenv').config();

// Create an instance of the express framework
const app = express();


// Grab the port variable  from the environment variables
const port = process.env.PORT || 5000;

// Handle CORS related issues
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use((req, res, next) => {
  res.send('Welcome to Express Server');
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});