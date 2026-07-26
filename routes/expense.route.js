// Expense Router
const express = require("express");
const router = express.Router();

const { getExpense } = require("../controllers/expense.controller");

router.get("/", getExpense);

module.exports = router;
