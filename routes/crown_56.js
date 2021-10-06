var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('crown_56', {
        title: 'Express',
        name: 'LEE, Bo-Yan',
        id: '209410256',
    });
});
module.exports = router;