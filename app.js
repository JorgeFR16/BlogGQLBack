const express = require('express');

const feedRoutes = require('./routes/feed');

const app = express();

// Para quitar el error del navegador de favicon
app.get('/favicon.ico', (req, res) => res.status(204));

// app.use(express.urlencoded({ extended: true }));  // x-www-form-urlencoded <form>
app.use(express.json()); // application/json

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-type, Authorization');
  next();
});

app.use('/feed', feedRoutes);

app.listen(8080);
