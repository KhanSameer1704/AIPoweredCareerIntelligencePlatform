const roleSkills = {
  "Full Stack Developer": [
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "REST API",
    "Git",
    "Testing",
  ],

  "Frontend Developer": [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Git",
    "Responsive Design",
    "Testing",
  ],

  "Backend Developer": [
    "Node.js",
    "Express",
    "MongoDB",
    "REST API",
    "SQL",
    "Git",
    "Testing",
  ],

  "Data Analyst": [
    "Python",
    "SQL",
    "Excel",
    "Pandas",
    "NumPy",
    "Data Visualization",
    "Statistics",
  ],
};

const analyzeSkillGap = (userSkills, targetRole) => {
  const requiredSkills = roleSkills[targetRole];

  if (!requiredSkills) {
    return {
      message: "Target role not available",
      strongSkills: [],
      missingSkills: [],
      matchPercentage: 0,
    };
  }

  const normalizedUserSkills = userSkills.map((skill) =>
    skill.toLowerCase().trim()
  );

  const strongSkills = requiredSkills.filter((skill) =>
    normalizedUserSkills.includes(skill.toLowerCase())
  );

  const missingSkills = requiredSkills.filter(
    (skill) => !normalizedUserSkills.includes(skill.toLowerCase())
  );

  const matchPercentage = Math.round(
    (strongSkills.length / requiredSkills.length) * 100
  );

  return {
    targetRole,
    requiredSkills,
    strongSkills,
    missingSkills,
    matchPercentage,
  };
};

module.exports = analyzeSkillGap;