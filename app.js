// import express
const express = require('express');

// import routes
const routes = require('./routes/api');

// membuat object express
const app = express();

// menggunakan middlewere
app.use(express.json());
app.use(express.urlencoded());

// menggunakan routes
app.use(routes);

//  mendefinisikan port
app.listen(3000);
