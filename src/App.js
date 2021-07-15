// Import depencies
require('dotenv').config({ path: '.env' });
const Express = require('express');
const CORS = require('cors');

// Initialize server
const express = Express();
express.use(CORS());

// Setup router for REST API
const PublicRoute = require('./routes/rest/PublicRoute');
express.use('/rest/public', PublicRoute);

module.exports = express;
