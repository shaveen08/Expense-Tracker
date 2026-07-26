// Expense controller
const Expense = require("../models/expense.model");

// Post new expense
const createExpense = async (req, res) => {
  try {
    const { title, amount, category } = req.body;
    if (!title || !amount || !category) {
      return res.status(400).json({
        success: false,
        message: "Title, amount and category are required",
      });
    }

    const newExpense = await Expense.create({ title, amount, category });
    res.status(200).json({
      success: true,
      message: "Expense added successfully",
      data: newExpense,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Cant create a data",
      error: err.message,
    });
  }
};

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

module.exports = { createExpense, getExpense };
