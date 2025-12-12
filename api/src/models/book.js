const db = require("../config/database");

class Books {
	static async findListBooks(title, author, page, limit) {
		const offset = (page - 1) * limit;
		const searchTerm = `%${title}%`;
		const searchTerm_2 = `%${author}%`;

		if(title === undefined && author === undefined){
			const query = 'SELECT * FROM books ORDER BY title ASC LIMIT $1 OFFSET $2';
			const countQuery = 'SELECT COUNT(*) FROM books';

			try {
				const { rows: listBooks } = await db.query(query, [limit, offset]);
				const { rows: [{ count }] } = await db.query(countQuery);
			  
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
		} else if(title !== undefined && author === undefined){
			const query = 'SELECT * FROM books WHERE title ILIKE $1 ORDER BY title ASC LIMIT $2 OFFSET $3';
			const countQuery = 'SELECT COUNT(*) FROM books WHERE title ILIKE $1';

			try {
				const { rows: listBooks } = await db.query(query, [searchTerm, limit, offset]);
				const { rows: [{ count }] } = await db.query(countQuery, [searchTerm]);
			  
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
		} else if(title === undefined && author !== undefined){
			const query = 'SELECT * FROM books WHERE author ILIKE $1 ORDER BY title ASC LIMIT $2 OFFSET $3';
			const countQuery = 'SELECT COUNT(*) FROM books WHERE author ILIKE $1';

			try {
				const { rows: listBooks } = await db.query(query, [searchTerm_2, limit, offset]);
				const { rows: [{ count }] } = await db.query(countQuery, [searchTerm_2]);
			  
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
		} else {
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
}

module.exports = Books;