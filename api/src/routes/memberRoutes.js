const router = require('express-promise-router')();
const membersController = require('../controllers/memberController');

/**
* @swagger
* components:
*   schemas:
*     Members:
*       type: object
*       properties:
*         name:
*           type: string
*           description: Member name
*         email:
*           type: string
*           description: Email member must be valid and unique 
*         phone:
*           type: string
*           description: Phone member must be indonesian number
*         address:
*           type: string
*           description: Address member
*/

/**
* @swagger
* /members:
*   post:
*     summary: Create a new member
*     requestBody:
*       required: true
*       content:
*         application/x-www-form-urlencoded:
*           schema:
*             $ref: '#/components/schemas/Members'
*     responses:
*       201:
*         description: Members created
*/
router.post('/members', membersController.createMember);

/**
 * @swagger
 * /members/{id}:
 *   get:
 *     summary: Retrieve history borrowed or returned of the books from member.
 *     description:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Member ID to retrieve.
 *         schema:
 *           type: string 
 *       - in: query
 *         name: status
 *         required: false
 *         description: Status BORROWED / RETURNED of the books history to retrieve.
 *         schema:
 *           type: string
 *       - in: query
 *         name: page
 *         required: false
 *         description: Pagination list of the books history to retrieve.
 *         schema:
 *           type: integer
 *       - in: query
 *         name: limit
 *         required: false
 *         description: Limitation list of the books history to retrieve.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A list history member borrowed / returned of books.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                 totalItems:
 *                   type: integer
 *                   example: 1
 *                 currentPage:
 *                   type: integer
 *                   example: 1
 *                 totalPages:
 *                   type: integer
 *                   example: 1
*/
router.get('/members/:id', membersController.getMemberHistory);

module.exports = router;