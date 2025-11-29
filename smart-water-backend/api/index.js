const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("../config/db");

// Load environment variables
dotenv.config();

// Connect MongoDB
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/thingspeak", require("../routes/thingspeakRoutes"));
app.use("/api/water", require("../routes/waterRoutes"));
app.use("/api/tap", require("../routes/tapRoutes"));

// Test route
app.get("/", (req, res) => {
    res.json({ message: "Smart Water Backend is running on Vercel!" });
});

// ❗ NO app.listen()
// Vercel serverless exports the app
module.exports = app;