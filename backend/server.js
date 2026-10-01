require("dotenv").config();

const express = require("express");
const cors = require("cors");

const protect = require("./middlewares/authMiddleware");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const profileRoutes = require("./routes/profileRoutes");
const careerRoutes = require("./routes/careerRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("🚀 AI Powered Career Intelligence Platform!");
});

app.get("/api/protected", protect, (req, res) => {
  res.status(200).json({
    message: "You have access to the protected route!",
    userId: req.userId,
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/career", careerRoutes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});