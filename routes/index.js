const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send("This API is Alex's!");
});

router.get('/health-check', (req, res) => {
  res.send('OK, the server is running!');
});

module.exports = router;