const express = require('express');
const bodyParser = require('body-parser')

const mongoose = require('mongoose');
mongoose.connect('mongodb://wisepay:wisepass@ds113906.mlab.com:13906/wisepay-bank', {
    useMongoClient: true
});
mongoose.Promise = global.Promise;

const bankRoutes = require('./bank-routes');

const app = express();
app.use(bodyParser.json())

app.use('/', bankRoutes);

app.listen(8001, () => {
    console.log('bank listening')
});