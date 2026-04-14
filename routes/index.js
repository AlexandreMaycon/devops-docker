const express = require('express');

const router = express.Router();

// Define a single route that responds to GET requests
router.get('/', (req, res) => {
    res.send('Hello, World!');
});

module.exports = router;