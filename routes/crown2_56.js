var express = require('express');
var router = express.Router();
const crown2Controller_56 = require('../controllers/crown2Controller_56')
/* GET home page. */
router.get('/', crown2Controller_56.getCategories);

module.exports = router;