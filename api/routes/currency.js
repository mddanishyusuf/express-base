const router = require('express').Router();
const currency = require('../controllers/currency');

router.get('/', currency.home_page);

module.exports = router;
