const express = require('express');
const app = express();
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');

// for get api gw event object in express, this middleware parser only works when you use api gw mode
app.use(awsServerlessExpressMiddleware.eventContext());

app.get('/', (req, res) => {
  res.json({ status: 'this is root path' });
});

app.get('/api/test', (req, res) => {
  res.json({ status: 'running' });
});

module.exports = app;
