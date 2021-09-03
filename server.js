'use strict';

const express = require('express'),
  app = express(),
  cors = require('cors');

const port = process.env.PORT || 3000;

const CorsOptions = {
  origin: '*',//Config.OriginWhiteList,
  credentials: true
};
app.use(cors(CorsOptions));

//adding route for home page
app.get('/', (req, res) => {
  res.send('<center><h2><b>Hi, This is HEPG Server.<br><i> How can i help you ;)</i></b></h2></center>');
});

// Server
app.listen(port, () => {
   console.log(`Listening on: http://localhost:${port}`);
});

module.exports = app;