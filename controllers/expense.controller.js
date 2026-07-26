// Expense controller
const Expense = require("../models/expense.model");

// Get all expenses
const getExpense = async (req, res) => {
  try {
    const expense = await Expense.find().sort({ createdAt: 1 });
    res.status(200).json({
      success: true,
      message: "Expenses data retrived",
      count: expense.length,
      data: expense,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Cannot retrive data",
      error: err.message,
    });
  }
};

module.exports = { getExpense };
