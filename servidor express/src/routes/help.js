let express = require('express');
let router = express.Router();
let controller = require('../controllers/helpController.js');


router.get('/',controller.index);

module.exports = router