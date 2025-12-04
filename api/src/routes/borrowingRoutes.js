const router = require('express-promise-router')();
const borrowingsController = require('../controllers/borrowingController');

router.post('/borrowings', borrowingsController.createBorrowing);
router.put('/borrowings/:id', borrowingsController.updateReturningById);

module.exports = router;