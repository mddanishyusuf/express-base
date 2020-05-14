const express = require('express');
// const path = require('path');
const bodyParser = require('body-parser');
const errorHandler = require('./api/middleware/error');

const app = express();
const port = process.env.PORT || 3000;

const currencyRoute = require('./api/routes/currency');
const ipinfoRoute = require('./api/routes/ipinfo');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require('cors')());

app.use('/currency', currencyRoute);
app.use('/ipinfo', ipinfoRoute);

app.use(errorHandler);

app.listen(port);

console.log(`RESTful API server started on: ${port}`);
