// Expense Schema
const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Expense title is required"],
      trim: true,
    },
    amount: {
      type: Number,
      required: [true, "Expense amount is required"],
      min: [1, "Amount must be greater than zero"],
    },
    category: {
      type: String,
      required: [true, "Expense category is required"],
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Expense", expenseSchema);
