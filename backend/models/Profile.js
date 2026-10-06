const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    headline: {
      type: String,
      trim: true,
    },

    about: {
      type: String,
      trim: true,
    },

    education: [
      {
        degree: String,
        institution: String,
        fieldOfStudy: String,
        startYear: Number,
        endYear: Number,
      },
    ],

    skills: [
      {
        type: String,
        trim: true,
      },
    ],

    experience: [
      {
        jobTitle: String,
        company: String,
        startDate: Date,
        endDate: Date,
        description: String,
      },
    ],

    projects: [
      {
        title: String,
        description: String,
        technologies: [String],
        projectUrl: String,
      },
    ],

    certifications: [
      {
        name: String,
        organization: String,
        issueDate: Date,
        credentialUrl: String,
      },
    ],

    targetRole: {
      type: String,
      trim: true,
    },

    careerGoals: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Profile", profileSchema);