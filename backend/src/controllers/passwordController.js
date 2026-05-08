const Password = require("../models/Password");

// Get all passwords
const getAllPasswords = async (req, res) => {
    try {
        const passwords = await Password.find({});
        res.json(passwords);
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Save a password
const savePassword = async (req, res) => {
    try {
        const password = await Password.create(req.body);
        res.json({ success: true, result: password });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Delete a password by id
const deletePassword = async (req, res) => {
    try {
        const result = await Password.deleteOne(req.body);
        res.json({ success: true, result });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

module.exports = { getAllPasswords, savePassword, deletePassword };
