// Server
require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/db");

// ------------------------------------------------------------
// Middleware
//  -----------------------------------------------------------
app.use(cors());
app.use(express.json());

// ------------------------------------------------------------
// Database connection
//  -----------------------------------------------------------
connectDB();

//  -----------------------------------------------------------
// Routes
//  -----------------------------------------------------------
app.use("/api/expense", require("./routes/expense.route"));

// ------------------------------------------------------------
// Server creation
//  -----------------------------------------------------------
const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on PORT: http://localhost:${PORT}`);
});
