const express = require('express');
router = express.Router();

// route for login
router.get('/signup-api', (req, res) => {
    res.send('Signup Page');
});

module.exports = router;