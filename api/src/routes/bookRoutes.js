const router = require('express-promise-router')();
const bookController = require('../controllers/bookController');

router.get('/books', bookController.listAllBooks);

module.exports = router;