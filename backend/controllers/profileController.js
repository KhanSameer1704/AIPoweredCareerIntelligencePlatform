const Profile = require("../models/Profile");

// Create or update profile
const createProfile = async (req, res) => {
  try {
    const {
      fullName,
      headline,
      about,
      education,
      skills,
      experience,
      projects,
      certifications,
      targetRole,
      careerGoals,
    } = req.body;

    // Check required field
    if (!fullName) {
      return res.status(400).json({
        message: "Full name is required",
      });
    }

    // Check if profile already exists
    let profile = await Profile.findOne({
      user: req.userId,
    });

    if (profile) {
      // Update existing profile
      profile.fullName = fullName;
      profile.headline = headline;
      profile.about = about;
      profile.education = education;
      profile.skills = skills;
      profile.experience = experience;
      profile.projects = projects;
      profile.certifications = certifications;
      profile.targetRole = targetRole;
      profile.careerGoals = careerGoals;

      await profile.save();

      return res.status(200).json({
        message: "Profile updated successfully",
        profile,
      });
    }

    // Create new profile
    profile = await Profile.create({
      user: req.userId,
      fullName,
      headline,
      about,
      education,
      skills,
      experience,
      projects,
      certifications,
      targetRole,
      careerGoals,
    });

    res.status(201).json({
      message: "Profile created successfully",
      profile,
    });
  } catch (error) {
    console.error("Profile Error:", error.message);

    res.status(500).json({
      message: "Server error",
    });
  }
};

// Get logged-in user's profile
const getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.userId,
    });

    if (!profile) {
      return res.status(404).json({
        message: "Profile not found",
      });
    }

    res.status(200).json({
      profile,
    });
  } catch (error) {
    console.error("Get Profile Error:", error.message);

    res.status(500).json({
      message: "Server error",
    });
  }
};

module.exports = {
  createProfile,
  getProfile,
};