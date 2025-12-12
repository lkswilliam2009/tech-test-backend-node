const router = require('express-promise-router')();
const borrowingsController = require('../controllers/borrowingController');

/**
* @swagger
* components:
*   schemas:
*     Borrowings:
*       type: object
*       properties:
*         book_id:
*           type: string
*           description: Book ID
*         member_id:
*           type: string
*           description: Member ID
*/

/**
* @swagger
* /borrowings:
*   post:
*     summary: Submit a borrowing books to member
*     requestBody:
*       required: true
*       content:
*         application/x-www-form-urlencoded:
*           schema:
*             $ref: '#/components/schemas/Borrowings'
*     responses:
*       201:
*         description: Borrowings created
*/
router.post('/borrowings', borrowingsController.createBorrowing);

/**
* @swagger
* components:
*   schemas:
*     Returning:
*       type: object
*       properties:
*         member_id:
*           type: string
*           description: Member ID
*/

/**
* @swagger
* /borrowings/{id}:
*   put:
*     summary: Submit a returning books from member
*     parameters:
*       - in: path
*         name: id
*         required: true
*         description: Borrowing ID to retrieve.
*         schema:
*           type: string 
*     requestBody:
*       required: true
*       content:
*         application/x-www-form-urlencoded:
*           schema:
*             $ref: '#/components/schemas/Returning'
*     responses:
*       201:
*         description: Returning created
*/
router.put('/borrowings/:id', borrowingsController.updateReturningById);

module.exports = router;