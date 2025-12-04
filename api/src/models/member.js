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