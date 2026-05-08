const express = require("express");
const cors = require("cors");
const passwordRoutes = require("./routes/passwordRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/", passwordRoutes);

module.exports = app;