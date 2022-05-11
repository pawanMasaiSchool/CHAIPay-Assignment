const express = require('express');
const { createIntent, getAllIntents } = require('../controllers/intent.controller');

const router = express.Router();


router.post('/create_intent', createIntent);
router.get('/get_intents',getAllIntents)


module.exports = router