const calculateProfileScore = (profile) => {
  let score = 0;

  const breakdown = {
    skills: 0,
    education: 0,
    projects: 0,
    experience: 0,
    certifications: 0,
    profileQuality: 0,
  };

  // Skills — 25 points
  if (profile.skills && profile.skills.length > 0) {
    const skillCount = profile.skills.length;

    if (skillCount >= 8) {
      breakdown.skills = 25;
    } else {
      breakdown.skills = Math.round((skillCount / 8) * 25);
    }
  }

  // Education — 15 points
  if (profile.education && profile.education.length > 0) {
    breakdown.education = 15;
  }

  // Projects — 20 points
  if (profile.projects && profile.projects.length > 0) {
    const projectCount = profile.projects.length;

    if (projectCount >= 3) {
      breakdown.projects = 20;
    } else {
      breakdown.projects = Math.round((projectCount / 3) * 20);
    }
  }

  // Experience — 20 points
  if (profile.experience && profile.experience.length > 0) {
    const experienceCount = profile.experience.length;

    if (experienceCount >= 2) {
      breakdown.experience = 20;
    } else {
      breakdown.experience = 10;
    }
  }

  // Certifications — 10 points
  if (profile.certifications && profile.certifications.length > 0) {
    const certificationCount = profile.certifications.length;

    if (certificationCount >= 2) {
      breakdown.certifications = 10;
    } else {
      breakdown.certifications = 5;
    }
  }

  // Profile Quality — 10 points
  let qualityPoints = 0;

  if (profile.fullName) qualityPoints += 2;
  if (profile.headline) qualityPoints += 2;
  if (profile.about) qualityPoints += 2;
  if (profile.targetRole) qualityPoints += 2;
  if (profile.careerGoals) qualityPoints += 2;

  breakdown.profileQuality = qualityPoints;

  // Calculate total score
  score =
    breakdown.skills +
    breakdown.education +
    breakdown.projects +
    breakdown.experience +
    breakdown.certifications +
    breakdown.profileQuality;

  return {
    score,
    breakdown,
  };
};

module.exports = calculateProfileScore;