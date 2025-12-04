const borowingsModel = require('../models/borrowing');

exports.createBorrowing = async (req, res) => {
    const { book_id, member_id } = req.body;
	
    if (!book_id || !member_id) {
        return res.status(400).json({ message: 'Failed to submit borrowed book.',error: 'Book ID and Member ID are required.' });
    }
	
	const bookStock = await borowingsModel.getBookStock(book_id);
	const memberBorrow = await borowingsModel.getMemberBorrowingBook(member_id);
	
	if(bookStock < 0){
		return res.status(400).json({ error: 'Book out of stock.' });
	}
	
	if(memberBorrow >= 3){
		return res.status(400).json({ error: 'Member cannot borrow more than 3 books.' });
	}

    try {
        const newBorrowing = await borowingsModel.postBorrowing(book_id, member_id, bookStock);
        res.status(201).json({
			message: "Borrowing book successfully created!",
			body: {
			  data: { book_id, member_id }
			},
		});
    } catch (err) {
        res.status(500).json({ message: 'Failed to submit borrowed book.', error: err.message });
    }
};

exports.updateReturningById = async (req, res) => {
	const { id } = req.params;
	const { member_id } = req.body;
	
    if (!id) {
        return res.status(400).json({ message: 'Failed to submit return book.',error: 'Borrowing ID is required.' });
    }
	
	// check existing data
	const borrowIDCheck = await borowingsModel.getBorrowIDCheck(id);

	if(borrowIDCheck == 0){
		return res.status(400).json({ error: 'Borrowing ID is not found.' });
	}
	
	// check the book belongs to member
	const memberBookBelongCheck = await borowingsModel.getmemberBookBelongCheck(id, member_id);

	if(memberBookBelongCheck == 0){
		return res.status(400).json({ error: 'You are not belongs to this book!' });
	}
	
	// check the book is returned status
	const bookReturnedCheck = await borowingsModel.getbookReturnedCheck(id);

	if(bookReturnedCheck >= 1){
		return res.status(400).json({ error: 'Book already returned!' });
	}
	
	const bookStock = await borowingsModel.getBookStockFromBorrowing(id);
	const bookIDBorrow = await borowingsModel.getBorrowingBookID(id);

    try {
        const newReturning = await borowingsModel.putReturning(id, bookStock, bookIDBorrow);
        res.status(201).json({
			message: "Returning book successfully created!",
			body: {
			  data: { id }
			},
		});
    } catch (err) {
        res.status(500).json({ message: 'Failed to submit returning book.', error: err.message });
    }
};