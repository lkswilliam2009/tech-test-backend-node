const router = require('express-promise-router')();
const bookController = require('../controllers/bookController');

/**
 * @swagger
 * /books:
 *   get:
 *     summary: Retrieve a list of Books.
 *     description: 
 *     parameters:
 *       - in: query
 *         name: title
 *         required: false
 *         description: Title of the books to retrieve.
 *         schema:
 *           type: string
 *       - in: query
 *         name: author
 *         required: false
 *         description: Author of the books to retrieve.
 *         schema:
 *           type: string
 *       - in: query
 *         name: page
 *         required: false
 *         description: Pagination list of the books to retrieve.
 *         schema:
 *           type: integer
 *       - in: query
 *         name: limit
 *         required: false
 *         description: Limitation list of the books to retrieve.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A list of books.
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
 *                       id:
 *                         type: integer
 *                         description: The Book ID.
 *                         example: c3a79803-5713-431b-adbc-806f0e06320012
 *                       title:
 *                         type: string
 *                         description: Title.
 *                         example: The Great Gatsby
 *                       author:
 *                         type: string
 *                         description: Title.
 *                         example: F. Scott Fitzgerald
 *                       published_year:
 *                         type: integer
 *                         description: Published Year.
 *                         example: 1925
 *                       stock:
 *                         type: integer
 *                         description: Stock.
 *                         example: 5
 *                       isbn:
 *                         type: integer
 *                         description: Title.
 *                         example: 9780743273565
 *                       created_at:
 *                         type: datetime
 *                         description: Data Created At.
 *                         example: 2025-12-03T10:25:26.704Z
 *                       updated_at:
 *                         type: datetime
 *                         description: Data Updated At.
 *                         example: 2025-12-03T10:25:26.704Z
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
router.get('/books', bookController.listAllBooks);

module.exports = router;