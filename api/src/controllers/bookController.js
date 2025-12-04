const booksModel = require('../models/book');

exports.listAllBooks = async (req, res) => {
	try {
		const { title, author, page = 1, limit = 10 } = req.query;

		const parsedPage = parseInt(page);
		const parsedLimit = parseInt(limit);

		if (isNaN(parsedPage) || parsedPage < 1 || isNaN(parsedLimit) || parsedLimit < 1) {
			return res.status(400).json({ message: 'Invalid page or limit parameters.' });
		}

		const itemsData = await booksModel.findListBooks(title, author, parsedPage, parsedLimit);
		res.status(200).json(itemsData);
	} catch (error) {
		res.status(500).json({ message: 'Server error', error: error.message });
	}
};