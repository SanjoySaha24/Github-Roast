import axios from 'axios';

// Function to get GitHub user data
export const getGitHubData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error('GitHub API request failed');
  }
};
