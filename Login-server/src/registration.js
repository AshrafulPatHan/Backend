const express = require('express');
router = express.Router();

// route for login
router.get('/login', (req, res) => {
    res.send('Login Page');
});

module.exports = router;