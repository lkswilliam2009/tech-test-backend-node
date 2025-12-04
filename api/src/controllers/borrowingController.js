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
        const newMember = await borowingsModel.postBorrowing(book_id, member_id, bookStock);
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