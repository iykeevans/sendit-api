const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes')

// fire express
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// use imported routes
app.use(routes);

app.listen(5000, () => {
    console.log('listening to port 5000')
});

module.exports = app;