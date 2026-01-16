const express = require('express');
router = express.Router();

// route for login
router.get('/login-api', (req, res) => {
    res.send('Login api');
});

module.exports = router;