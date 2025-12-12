const db = require("../config/database");

exports.postMember = async (name, email, phone, address) => {
    const query = 'INSERT INTO members (name, email, phone, address) VALUES ($1, $2, $3, $4) RETURNING *';
    const values = [name, email, phone, address];
    try {
        const result = await db.query(query, values);
        return result.rows[0];
    } catch (err) {
        console.error('Error creating member:', err);
        throw err;
    }
};

exports.findMemberHistory = async (id, status, page, limit) => {
    const offset = (page - 1) * limit;
	const searchTerm = `%${status}%`;

	if(status === undefined){
		const query = 'SELECT * FROM tview_history_borrowings WHERE member_id = $1 ORDER BY borrow_date, return_date DESC LIMIT $2 OFFSET $3';
		const countQuery = 'SELECT COUNT(*) FROM tview_history_borrowings WHERE member_id = $1';

		try {
			const { rows: listMember } = await db.query(query, [id, limit, offset]);
			const { rows: [{ count }] } = await db.query(countQuery, [ id]);
		  
			return {
				data: listMember,
				totalItems: parseInt(count),
				currentPage: page,
				totalPages: Math.ceil(count / limit),
			};
		} catch (error) {
			console.error('Error fetching list book by name with pagination:', error);
			throw error;
		}
	} else {
		const query = 'SELECT * FROM tview_history_borrowings WHERE status ILIKE $1 AND member_id = $2 ORDER BY borrow_date, return_date DESC LIMIT $3 OFFSET $4';
		const countQuery = 'SELECT COUNT(*) FROM tview_history_borrowings WHERE status ILIKE $1 AND member_id = $2';

		try {
			const { rows: listMember } = await db.query(query, [searchTerm, id, limit, offset]);
			const { rows: [{ count }] } = await db.query(countQuery, [searchTerm, id]);
		  
			return {
				data: listMember,
				totalItems: parseInt(count),
				currentPage: page,
				totalPages: Math.ceil(count / limit),
			};
		} catch (error) {
			console.error('Error fetching list book by name with pagination:', error);
			throw error;
		}
	}
};