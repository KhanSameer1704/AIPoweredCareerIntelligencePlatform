const Profile = require("../models/Profile");

const calculateProfileScore = require("../services/careerScoringService");

const analyzeSkillGap = require("../services/skillGapService");

const getCareerRecommendations = require(
  "../services/careerRecommendationService"
);

const generateCareerInsights = require("../services/aiCareerService");

// Get Profile Score
const getProfileScore = async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.userId,
    });

    if (!profile) {
      return res.status(404).json({
        message: "Profile not found",
      });
    }

    const result = calculateProfileScore(profile);

    res.status(200).json({
      message: "Profile score calculated successfully",
      score: result.score,
      breakdown: result.breakdown,
    });
  } catch (error) {
    console.error("Profile Score Error:", error.message);

    res.status(500).json({
      message: "Server error",
    });
  }
};

// Get Skill Gap
const getSkillGap = async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.userId,
    });

    if (!profile) {
      return res.status(404).json({
        message: "Profile not found",
      });
    }

    if (!profile.targetRole) {
      return res.status(400).json({
        message: "Please set a target role in your profile",
      });
    }

    const result = analyzeSkillGap(
      profile.skills || [],
      profile.targetRole
    );

    res.status(200).json({
      message: "Skill gap analyzed successfully",
      analysis: result,
    });
  } catch (error) {
    console.error("Skill Gap Error:", error.message);

    res.status(500).json({
      message: "Server error",
    });
  }
};

// Get Career Recommendations
const getCareerRecommendationsForUser = async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.userId,
    });

    if (!profile) {
      return res.status(404).json({
        message: "Profile not found",
      });
    }

    const recommendations = getCareerRecommendations(
      profile.skills || []
    );

    res.status(200).json({
      message: "Career recommendations generated successfully",
      recommendations,
    });
  } catch (error) {
    console.error(
      "Career Recommendation Error:",
      error.message
    );

    res.status(500).json({
      message: "Server error",
    });
  }
};

// Generate AI Career Insights
const getAICareerInsights = async (req, res) => {
  try {
    // Get user's profile
    const profile = await Profile.findOne({
      user: req.userId,
    });

    if (!profile) {
      return res.status(404).json({
        message: "Profile not found",
      });
    }

    // Calculate profile score
    const score = calculateProfileScore(profile);

    // Analyze skill gap
    const skillGap = analyzeSkillGap(
      profile.skills || [],
      profile.targetRole
    );

    // Generate career recommendations
    const recommendations = getCareerRecommendations(
      profile.skills || []
    );

    // Generate AI insights
    const insights = await generateCareerInsights({
      profile,
      score,
      skillGap,
      recommendations,
    });

    res.status(200).json({
      message: "AI career insights generated successfully",
      insights,
    });
  } catch (error) {
    console.error("AI Career Insights Error:", error.message);

    res.status(500).json({
      message: "Failed to generate AI career insights",
    });
  }
};

module.exports = {
  getProfileScore,
  getSkillGap,
  getCareerRecommendationsForUser,
  getAICareerInsights,
};