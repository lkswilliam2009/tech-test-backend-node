const db = require("../config/database");

class Books {
	static async findListBooks(title, author, page, limit) {
		const offset = (page - 1) * limit;
		const searchTerm = `%${title}%`; // For case-insensitive partial matching
		const searchTerm_2 = `%${author}%`; // For case-insensitive partial matching

		const query = 'SELECT * FROM books WHERE title ILIKE $1 OR author ILIKE $2 ORDER BY title ASC LIMIT $3 OFFSET $4';
		const countQuery = 'SELECT COUNT(*) FROM books WHERE title ILIKE $1 OR author ILIKE $2';

		try {
			const { rows: listBooks } = await db.query(query, [searchTerm, searchTerm_2, limit, offset]);
			const { rows: [{ count }] } = await db.query(countQuery, [searchTerm, searchTerm_2]);
		  
			return {
				data: listBooks,
				totalItems: parseInt(count),
				currentPage: page,
				totalPages: Math.ceil(count / limit),
			};
		} catch (error) {
			console.error('Error fetching list book by name with pagination:', error);
			throw error;
		}
	}
}

module.exports = Books;