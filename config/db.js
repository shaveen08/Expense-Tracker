// Database Config
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected successfully..");
  } catch (err) {
    console.log("Database failed to connect..", err);
    process.exit(1);
  }
};

module.exports = connectDB;
