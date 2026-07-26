// Expense Router
const express = require("express");
const router = express.Router();

const { createExpense, getExpense } = require("../controllers/expense.controller");

router.post("/", createExpense)
router.get("/", getExpense);

module.exports = router;
