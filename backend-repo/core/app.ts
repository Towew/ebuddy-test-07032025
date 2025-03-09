require('dotenv').config();
import express from "express";
import bodyParser from "body-parser";
import userRoutes from "../routes/userRoutes";

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api", userRoutes);

const PORT = process.env.APP_PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});