const express = require("express");

const {
  getProfileScore,
  getSkillGap,
  getCareerRecommendationsForUser,
  getAICareerInsights,

} = require("../controllers/careerController");

const protect = require("../middlewares/authMiddleware");

const router = express.Router();

// Get career profile score
router.get("/score", protect, getProfileScore);

// Get skill gap analysis
router.get("/skill-gap", protect, getSkillGap);

// Get career recommendations
router.get(
  "/recommendations",
  protect,
  getCareerRecommendationsForUser
);

module.exports = router;