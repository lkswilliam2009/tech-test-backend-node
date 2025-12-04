const db = require("../config/database");

function getToday(){
	const currentDate = new Date();
	const year = currentDate.getFullYear();
	const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
	const day = currentDate.getDate().toString().padStart(2, '0');
	const formattedDate = `${year}-${month}-${day}`;
	return formattedDate;
}

exports.getBookStock = async (book_id) => {
    const query = 'SELECT stock FROM books WHERE id = $1 ';
    try {
        const result = await db.query(query, [book_id]);
        return result.rows[0].stock;
    } catch (err) {
        console.error('Error get stock book:', err);
        throw err;
    }
};

exports.getMemberBorrowingBook = async (member_id) => {
    const query = 'SELECT COUNT(*) AS sum_member FROM borrowings WHERE member_id = $1 ';
    try {
        const result = await db.query(query, [member_id]);
        return result.rows[0].sum_member;
    } catch (err) {
        console.error('Error get member borrowing books:', err);
        throw err;
    }
};

exports.postBorrowing = async (book_id, member_id, bookStock) => {
	const sekarang = new Date();
	const isoString = sekarang.toISOString();
  
    const query = 'INSERT INTO borrowings (book_id, member_id, borrow_date, status) VALUES ($1, $2, $3, $4) RETURNING *';
    const values = [book_id, member_id, getToday(), 'BORROWED'];
	
	const query_upd = 'UPDATE books SET stock = $1 WHERE id = $2';
    const values_upd = [bookStock-1, book_id];

    try {
        const update = await db.query(query_upd, values_upd);
        const result = await db.query(query, values);
        return result.rows[0];
    } catch (err) {
        console.error('Error submit borrowed book:', err);
        throw err;
    }
};