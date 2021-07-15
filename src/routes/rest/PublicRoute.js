
// Import dependencies
const express = require('express');
const { onRequest } = require('../../middlewares/RequestMiddleware');
const { sendSuccess, sendError } = require('../../middlewares/ResultMiddleware');
const { getAllClinic } = require('../../middlewares/CommonClinicMiddleware');

// Create router
const router = express.Router();
router.get('/clinics', onRequest, getAllClinic, sendSuccess, sendError);
module.exports = router;
