// index.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Root test route
app.get("/", (req, res) => {
  res.send("Backend is running! 🚀");
});

// Optional ping route
app.get("/ping", (req, res) => {
  res.send("Ping received!");
});

// Example: additional routes
app.get("/hello", (req, res) => {
  res.send("Hello from SessionHub backend!");
});

// Bind to the correct port for Railway and listen on 0.0.0.0
const PORT = process.env.PORT || 8080;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend running on port ${PORT}`);
});
