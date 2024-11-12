const express = require('express');
const router = express.Router();
const itensControlles = require('../controllers/itensControlles');

router.get('/', itensControlles.getItems);

module.exports = router;
