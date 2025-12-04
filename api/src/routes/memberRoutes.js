const router = require('express-promise-router')();
const membersController = require('../controllers/memberController');

router.post('/members', membersController.createMember);

module.exports = router;