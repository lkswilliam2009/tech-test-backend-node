const db = require("../config/database");
const { Pool } = require('pg');
const pool = new Pool(/* config */);

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

exports.getBookStockFromBorrowing = async (borrowing_id) => {
    const query_borrowing = 'SELECT book_id FROM borrowings WHERE id = $1 ';
    const query_book = 'SELECT stock FROM books WHERE id = $1 ';
	
    try {
        const bid = await db.query(query_borrowing, [borrowing_id]);
        const result = await db.query(query_book, [bid.rows[0].book_id]);
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

exports.getBorrowingBookID = async (id) => {
    const query = 'SELECT book_id FROM borrowings WHERE id = $1 ';
    try {
        const result = await db.query(query, [id]);
        return result.rows[0].book_id;
    } catch (err) {
        console.error('Error get book id borrowing books:', err);
        throw err;
    }
};

exports.getmemberBookBelongCheck = async (id, member_id) => {
    const query = 'SELECT COUNT(*) AS sum_belong FROM borrowings WHERE id = $1 AND member_id = $2 ';
    try {
        const result = await db.query(query, [id, member_id]);
        return result.rows[0].sum_belong;
    } catch (err) {
        console.error('Error get member borrowing id:', err);
        throw err;
    }
};

exports.getbookReturnedCheck = async (id) => {
    const query = 'SELECT COUNT(*) AS sum_returned FROM borrowings WHERE id = $1 AND status = $2 ';
    try {
        const result = await db.query(query, [id, "RETURNED"]);
        return result.rows[0].sum_returned;
    } catch (err) {
        console.error('Error get returned borrowing id:', err);
        throw err;
    }
};

exports.getBorrowIDCheck = async (id) => {
    const query = 'SELECT COUNT(*) AS sum_borrow FROM borrowings WHERE id = $1 ';
    try {
        const result = await db.query(query, [id]);
        return result.rows[0].sum_borrow;
    } catch (err) {
        console.error('Error get borrowing id:', err);
        throw err;
    }
};

exports.postBorrowing = async (book_id, member_id, bookStock) => {
	const trx = await pool.connect();
    const query = 'INSERT INTO borrowings (book_id, member_id, borrow_date, status) VALUES ($1, $2, $3, $4) RETURNING *';
    const values = [book_id, member_id, getToday(), 'BORROWED'];
	
	const query_upd = 'UPDATE books SET stock = $1 WHERE id = $2';
    const values_upd = [bookStock-1, book_id];

    try {
        const update = await db.query(query_upd, values_upd);
        const result = await db.query(query, values);
		await trx.query('COMMIT');
        return result.rows[0];
    } catch (err) {
		await trx.query('ROLLBACK');
        console.error('Error submit borrowed book:', err);
        throw err;
    } finally {
		trx.release();
	}
};

exports.putReturning = async (borrowing_id, bookStock, bookIDBorrow) => {
	const trx = await pool.connect();
    const query = 'UPDATE borrowings SET return_date = $1, status = $2 WHERE id = $3';
    const values = [getToday(), 'RETURNED', borrowing_id];	
	
	const query_upd = 'UPDATE books SET stock = $1 WHERE id = $2';
    const values_upd = [bookStock+1, bookIDBorrow];

    try {
        const update = await db.query(query_upd, values_upd);
        const result = await db.query(query, values);
		await trx.query('COMMIT');
        return result.rows[0];
    } catch (err) {
		await trx.query('ROLLBACK');
        console.error('Error submit returned book:', err);
        throw err;
    } finally {
		trx.release();
	}
};