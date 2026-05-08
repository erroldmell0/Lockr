const express = require("express");
const router = express.Router();
const {
    getAllPasswords,
    savePassword,
    deletePassword,
} = require("../controllers/passwordController");

router.get("/", getAllPasswords);
router.post("/", savePassword);
router.delete("/", deletePassword);

module.exports = router;
