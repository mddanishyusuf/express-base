const express = require('express');

const router = express.Router();
// const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

const currencyRoute = require('./api/routes/currency');
const ipinfoRoute = require('./api/routes/ipinfo');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require('cors')());

app.use('/currency', currencyRoute);
app.use('/ipinfo', ipinfoRoute);

app.listen(port);

console.log(`RESTful API server started on: ${port}`);
