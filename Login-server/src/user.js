const express = require('express');
router = express.Router();

// route for login
router.get('/user-api', (req, res) => {
    res.send('user api');
});

module.exports = router;