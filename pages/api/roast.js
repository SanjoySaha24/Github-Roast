// pages/api/roast.js
import axios from 'axios';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

export default async function handler(req, res) {
  const { username } = req.query;

  if (req.method === 'GET') {
    try {
      const githubResponse = await axios.get(`https://api.github.com/users/${username}`);
      const profileData = githubResponse.data;

      if (!profileData) return res.status(404).json({ error: "GitHub user not found" });

      const prompt = `Give me a light-hearted, humorous roast for a GitHub user named ${profileData.name || username}. This user has ${profileData.public_repos} repositories and ${profileData.followers} followers. Make sure the roast is clever and playful, poking fun at their coding skills, repository names, or follower count, but keep it friendly and good-natured.`;

      const result = await model.generateContent(prompt);
      const responseText = await result.response.text();
      
      res.status(200).json({ roast: responseText });
    } catch (error) {
      console.error('Error details:', error.response ? error.response.data : error.message);
      res.status(500).json({ error: 'Failed to fetch data or generate roast' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
