var express = require('express');
var router = express.Router();
const apiCrown2Controller_56 = require('../controllers/apiCrown2Controller_56');

/* GET home page. */
router.get('/category_56', apiCrown2Controller_56.getCategories);

module.exports = router;