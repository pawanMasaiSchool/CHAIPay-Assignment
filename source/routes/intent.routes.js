const express = require('express');
const { createIntent, getAllIntents, refundForCreatedIntent, captureIntent } = require('../controllers/intent.controller');
// using the common router for all routes to manage easily
const router = express.Router();


// Route for -> Create intent for payment
router.post('/create_intent', createIntent);


// Route for -> Capturing the created intent
router.post('/capture_intent/:id',captureIntent);


// Route for -> Creating a refund for the created intent
router.post('/refunds/create_refund/:id',refundForCreatedIntent);


// Route for -> Get a List of all intents
router.get('/get_intents',getAllIntents);



module.exports = router