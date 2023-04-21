const express = require('express');
const app = express();
const port = 3000;


app.use(function (req, res, next) {
    res.setHeader(
      'Content-Security-Policy-Report-Only', "default-src 'self'; script-src 'self'; style-src 'self'; font-src 'self'; img-src 'self'; frame-src 'self'"
    );
    
    next();
  });