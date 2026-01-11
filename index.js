// index.js
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Backend is running! 🚀");
});

// Ping route
app.get("/ping", (req, res) => {
  res.send("Ping received!");
});

// Example route
app.get("/hello", (req, res) => {
  res.send("Hello from SessionHub backend!");
});

// Bind to Railway port and 0.0.0.0
const PORT = process.env.PORT || 8080;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend running on port ${PORT}`);
});
