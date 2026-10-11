const Profile = require("../models/Profile");

const calculateProfileScore = require(
  "../services/careerScoringService"
);

const analyzeSkillGap = require(
  "../services/skillGapService"
);

const getCareerRecommendations = require(
  "../services/careerRecommendationService"
);

const generateCareerInsights = require(
  "../services/aiCareerService"
);

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

    return res.status(200).json({
      message: "Profile score calculated successfully",
      score: result.score,
      breakdown: result.breakdown,
    });
  } catch (error) {
    console.error("Profile Score Error:", error.message);

    return res.status(500).json({
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

    return res.status(200).json({
      message: "Skill gap analyzed successfully",
      analysis: result,
    });
  } catch (error) {
    console.error("Skill Gap Error:", error.message);

    return res.status(500).json({
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

    return res.status(200).json({
      message: "Career recommendations generated successfully",
      recommendations,
    });
  } catch (error) {
    console.error(
      "Career Recommendation Error:",
      error.message
    );

    return res.status(500).json({
      message: "Server error",
    });
  }
};

// Generate AI Career Insights
const getAICareerInsights = async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.userId,
    });

    if (!profile) {
      return res.status(404).json({
        message: "Profile not found",
      });
    }

    const score = calculateProfileScore(profile);

    const skillGap = analyzeSkillGap(
      profile.skills || [],
      profile.targetRole
    );

    const recommendations = getCareerRecommendations(
      profile.skills || []
    );

    const insights = await generateCareerInsights({
      profile,
      score,
      skillGap,
      recommendations,
    });

    return res.status(200).json({
      message: "AI career insights generated successfully",
      insights,
    });
  } catch (error) {
    console.error(
      "AI Career Insights Error:",
      error.message
    );

    return res.status(500).json({
      message: "Failed to generate AI career insights",
    });
  }
};

// Export all controller functions
module.exports = {
  getProfileScore,
  getSkillGap,
  getCareerRecommendationsForUser,
  getAICareerInsights,
};