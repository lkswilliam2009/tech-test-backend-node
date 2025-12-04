const router = require('express-promise-router')();
const membersController = require('../controllers/memberController');

router.post('/members', membersController.createMember);
router.get('/members/:id', membersController.getMemberHistory);

module.exports = router;