const express = require('express');
const cors = require('cors');

const app = express();

// routing
const index = require('./routes/index');
const bookRoute = require('./routes/bookRoutes');
const memberRoute = require('./routes/memberRoutes');
const borrowingRoute = require('./routes/borrowingRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use(index);
app.use('/api/', bookRoute);
app.use('/api/', memberRoute);
app.use('/api/', borrowingRoute);

module.exports = app;