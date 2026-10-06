const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const protect = require("./middlewares/authMiddleware");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const profileRoutes = require("./routes/profileRoutes");
const careerRoutes = require("./routes/careerRoutes");

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("🚀 AI Powered Career Intelligence Platform!");
});

// Temporary protected route for testing JWT
app.get("/api/protected", protect, (req, res) => {
  res.status(200).json({
    message: "You have access to the protected route!",
    userId: req.userId,
  });
});

// Authentication routes
app.use("/api/auth", authRoutes);

// Profile routes
app.use("/api/profile", profileRoutes);

// Career routes
app.use("/api/career", careerRoutes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});