const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const generateCareerInsights = async ({
  profile,
  score,
  skillGap,
  recommendations,
}) => {
  const prompt = `
You are an AI career advisor.

Analyze the following candidate's career profile and provide practical,
personalized career guidance.

CANDIDATE PROFILE:
Name: ${profile.fullName}
Headline: ${profile.headline || "Not provided"}
About: ${profile.about || "Not provided"}
Target Role: ${profile.targetRole || "Not provided"}
Career Goals: ${profile.careerGoals || "Not provided"}

SKILLS:
${(profile.skills || []).join(", ")}

PROFILE SCORE:
${score.score}/100

SCORE BREAKDOWN:
${JSON.stringify(score.breakdown)}

SKILL GAP:
${JSON.stringify(skillGap)}

CAREER RECOMMENDATIONS:
${JSON.stringify(recommendations)}

Provide the response in the following format:

1. Profile Summary
2. Career Assessment
3. Top Skills to Improve
4. Recommended Learning Path
5. Recommended Projects
6. Career Next Steps

Keep the advice practical and specific to the candidate.
Do not invent experience, education, or skills that are not present.
`;

  const response = await client.responses.create({
    model: "gpt-5-mini",
    input: prompt,
  });

  return response.output_text;
};

module.exports = generateCareerInsights;