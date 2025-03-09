require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("../routes/userRoutes");
const functions = require("firebase-functions/v2/https");
const cors = require("cors");
const { fetchUserData } = require("../functions")

const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api", userRoutes);

const PORT = process.env.APP_PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

exports.api = functions.onRequest(app);