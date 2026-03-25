import React from "react";
import { styled } from "styled-components";

const StyledWrapper = styled.div`
  .Header {
    display: flex;
    align-items: center;
    background-color: #08e610ff;
    color: #200404ff;
    padding: 10px;
    height: 10vh;
    width: 100%;
    justify-content: center;
    bottom: 0;
  }
  .Main {
    display: flex;
    height: 80vh;
    margin-top: 10vh;
  }
  .Left {
    width: 20%;
    background-color: #121212;
    padding: 20px;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .Right {
    width: 80%;
    background-color: #181818;
    padding: 20px;
    color: white;
  }
  .Controls {
    height: 10vh;
    background-color: #282828;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
  .btn {
    background: #1db954;
    border: none;
    border-radius: 50px;
    padding: 10px 20px;
    color: black;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.2s;
  }
  .btn:hover {
    transform: scale(1.05);
    background: #1ed760;
  }
  .btn:active {
    transform: scale(0.95);
  }
  .sidebar-item {
    cursor: pointer;
    opacity: 0.7;
    transition: opacity 0.2s;
  }
  .sidebar-item:hover {
    opacity: 1;
  }
`;

function Spotify() {
  return (
    <StyledWrapper>
      <div className="Main">
        <div className="Header">
          <h1>Spotify Player</h1>
        </div>
        <div className="Left">
          <div className="sidebar-item">🏠 Home</div>
          <div className="sidebar-item">🔍 Search</div>
          <div className="sidebar-item">📚 Your Library</div>
          <hr style={{ opacity: 0.2 }} />
          <div className="sidebar-item">➕ Create Playlist</div>
          <div className="sidebar-item">❤️ Liked Songs</div>
        </div>
        <div className="Right">
          <h2>Welcome to your Dashboard</h2>
          <p>Pick a song to start listening!</p>
        </div>
      </div>
      <div className="Controls">
        <button className="btn">⏮ Previous</button>
        <button
          className="btn"
          style={{ padding: "15px 30px", fontSize: "1.1rem" }}
        >
          ▶ Play
        </button>
        <button className="btn">⏭ Next</button>
      </div>
    </StyledWrapper>
  );
}

export default Spotify;
