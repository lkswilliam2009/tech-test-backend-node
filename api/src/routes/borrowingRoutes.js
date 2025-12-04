const router = require('express-promise-router')();
const borrowingsController = require('../controllers/borrowingController');

router.post('/borrowings', borrowingsController.createBorrowing);

module.exports = router;