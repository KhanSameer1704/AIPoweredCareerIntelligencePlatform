const careerRoles = {
  "Full Stack Developer": [
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "REST API",
    "Git",
  ],

  "Frontend Developer": [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Git",
    "Responsive Design",
  ],

  "Backend Developer": [
    "Node.js",
    "Express",
    "MongoDB",
    "REST API",
    "SQL",
    "Git",
  ],

  "Data Analyst": [
    "Python",
    "SQL",
    "Excel",
    "Pandas",
    "NumPy",
    "Statistics",
    "Data Visualization",
  ],

  "AI/ML Engineer": [
    "Python",
    "Machine Learning",
    "Deep Learning",
    "NumPy",
    "Pandas",
    "Scikit-learn",
    "Statistics",
  ],
};

const getCareerRecommendations = (userSkills) => {
  const normalizedUserSkills = userSkills.map((skill) =>
    skill.toLowerCase().trim()
  );

  const recommendations = Object.entries(careerRoles).map(
    ([role, requiredSkills]) => {
      const matchedSkills = requiredSkills.filter((skill) =>
        normalizedUserSkills.includes(skill.toLowerCase())
      );

      const missingSkills = requiredSkills.filter(
        (skill) =>
          !normalizedUserSkills.includes(skill.toLowerCase())
      );

      const matchPercentage = Math.round(
        (matchedSkills.length / requiredSkills.length) * 100
      );

      return {
        role,
        matchPercentage,
        matchedSkills,
        missingSkills,
      };
    }
  );

  // Highest matching careers first
  recommendations.sort(
    (a, b) => b.matchPercentage - a.matchPercentage
  );

  return recommendations;
};

module.exports = getCareerRecommendations;