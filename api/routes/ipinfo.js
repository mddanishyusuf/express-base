const router = require('express').Router();
const ipinfo = require('../controllers/ipinfo');

router.get('/', ipinfo.home_page);

module.exports = router;
