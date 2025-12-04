const membersModel = require('../models/member');

function isValidEmail(email) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

function validatePhoneNumber(phoneNumber) {
	const IDphoneNumber = phoneNumber.replace(/[^\d+]/g, '');
	return /^(\+62|62|0)8[1-9][0-9]{6,9}$/.test(IDphoneNumber);
}

exports.createMember = async (req, res) => {
    const { name, email, phone, address } = req.body;
	
    if (!name || !email || !phone || !address) {
        return res.status(400).json({ error: 'Name, Email, Phone and Address are required.' });
    }
	
	if(!isValidEmail(email)){
		return res.status(400).json({ error: 'Email is invalid format.' });
	}
	
	if(!validatePhoneNumber(phone)){
		return res.status(400).json({ error: 'Phone is invalid format.' });
	}

    try {
        const newMember = await membersModel.postMember(name, email, phone, address);
        res.status(201).json({
			message: "Member successfully created!",
			body: {
			  data: { name, email, phone, address }
			},
		});
    } catch (err) {
        res.status(500).json({ message: 'Failed to create member.', error: err.message });
    }
};