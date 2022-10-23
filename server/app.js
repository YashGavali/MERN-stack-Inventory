const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

const errorMiddleware = require('./middlewares/error');

app.use(express.json());
app.use(cookieParser());

//Route Imports
const product = require('./routes/productRoute');
const user = require('./routes/userRoute');
const order = require('./routes/orderRoute');

app.use('/api/v1', product);
app.use('/api/v1', user);
app.use('/api/v1', order);

//Error middleware

app.use(errorMiddleware);

module.exports = app;
