"use client"; // Indicate this component uses client-side JavaScript

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [username, setUsername] = useState('');
  const [roast, setRoast] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!username) return;

    setLoading(true);

    try {
      const response = await fetch(`/api/roast?username=${username}`);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setRoast(data.roast);
    } catch (error) {
      console.error('Error fetching roast:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl mb-6">GitHub Roast App</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
        className="p-2 border rounded"
      />
      <button
        onClick={handleSearch}
        className="ml-4 p-2 bg-blue-500 text-white rounded"
      >
        Roast
      </button>
      {loading && <p>Loading...</p>}
      {roast && (
        <div className="mt-6 p-4 border rounded">
          <h2 className="text-2xl">{username}</h2>
          <p>{roast}</p>
        </div>
      )}
    </main>
  );
}
