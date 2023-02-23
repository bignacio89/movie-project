const express = require('express');
const router = express.Router();

// about us page

router.get('/about-us', (req, res, next) => {
    res.render('info/about-us')
})

module.exports = router