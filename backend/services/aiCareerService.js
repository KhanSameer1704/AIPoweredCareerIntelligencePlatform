const generateCareerInsights = async ({
  profile,
  score,
  skillGap,
  recommendations,
}) => {
  try {
    const prompt = `
You are an AI Career Intelligence Assistant.

Analyze the following candidate information and provide practical career guidance.

PROFILE:
${JSON.stringify(profile, null, 2)}

CAREER PROFILE SCORE:
${JSON.stringify(score, null, 2)}

SKILL GAP:
${JSON.stringify(skillGap, null, 2)}

CAREER RECOMMENDATIONS:
${JSON.stringify(recommendations, null, 2)}

Provide the response using exactly these sections:

1. Profile Summary
2. Career Assessment
3. Top Skills to Improve
4. Recommended Learning Path
5. Recommended Projects
6. Career Next Steps

Important rules:
- Use only information provided in the profile and analysis.
- Do not invent skills, education, experience, projects, or certifications.
- Give practical and concise recommendations.
- Keep the response suitable for a college career intelligence project.
`;

    const response = await fetch(
      "http://localhost:11434/api/generate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama3.2:latest",
          prompt,
          stream: false,
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();

      throw new Error(
        `Ollama API error: ${response.status} ${errorText}`
      );
    }

    const data = await response.json();

    return data.response;
  } catch (error) {
    console.error(
      "Ollama Career Insights Error:",
      error.message
    );

    throw error;
  }
};

module.exports = generateCareerInsights;