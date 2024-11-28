import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default async function handler(req, res) {
  const { username } = req.query;

  if (!username) {
    return res.status(400).json({ error: 'GitHub username is required' });
  }

  try {
    // Fetch GitHub user data
    const response = await fetch(`https://api.github.com/users/${username}`);
    const userData = await response.json();

    const { followers, following, public_repos } = userData;

    // Construct the prompt for the roast
    const prompt = `Generate a fun, light-hearted roast for a GitHub user named ${username}. Roast them based on the following GitHub stats: followers (${followers}), following (${following}), and repositories (${public_repos}). Keep it friendly and humorous.`;

    // Generate content from the Gemini model
    const result = await model.generateContent([prompt]);

    // Send the generated roast back as the response
    res.status(200).json({ roast: result.response.text() });
  } catch (error) {
    console.error('Error generating roast:', error);
    res.status(500).json({ error: 'Failed to generate roast' });
  }
}
