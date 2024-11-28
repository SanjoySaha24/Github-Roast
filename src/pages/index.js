import { useState } from 'react';

export default function Home() {
  const [username, setUsername] = useState('');
  const [roast, setRoast] = useState('');

  const fetchRoast = async () => {
    if (!username) return alert('Please enter a GitHub username');
    try {
      const response = await fetch(`/api/roast?username=${username}`);
      const data = await response.json();
      setRoast(data.roast || 'No roast available.');
    } catch (error) {
      alert('Failed to fetch roast');
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>GitHub Roast Generator</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
        style={{ marginRight: '10px' }}
      />
      <button onClick={fetchRoast}>Roast Me</button>
      {roast && <p style={{ marginTop: '20px', fontWeight: 'bold' }}>{roast}</p>}
    </div>
  );
}
