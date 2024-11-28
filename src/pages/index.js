import { useState } from "react";

export default function Home() {
  const [username, setUsername] = useState("");
  const [roast, setRoast] = useState("");

  const handleSearch = async () => {
    // Call API or use a function to get the roast for the GitHub username
    const response = await fetch(`/api/roast?username=${username}`);
    const data = await response.json();
    setRoast(data.roast); // Assuming the roast API sends a roast message
  };

  return (
    <div id="welcomePage">
      <img src="/github.jpeg" alt="GitHub Logo" id="githubLogo" />
      <h1>Welcome to the GitHub Profile Roaster</h1>
      <p>This simple tool allows you to roast a GitHub user based on their profile.</p>
      <p>Enter a GitHub username:</p>
      
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <input
          type="text"
          id="search"
          placeholder="Search a GitHub User"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit" id="searchBtn">Search</button>
      </form>

      {roast && (
        <div className="card">
          <div className="roast">
            <p>{roast}</p>
          </div>
        </div>
      )}
    </div>
  );
}
