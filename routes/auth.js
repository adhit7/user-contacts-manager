const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.send('Get logged in user');
});

router.get('/', (req,res) => {
    res.send('Log in user');
});

module.exports = router;