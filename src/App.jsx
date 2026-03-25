import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Resume from "./pages/resume";
import Login from "./pages/Login";
import Spotify from "./pages/Spotify";
import Navbar from "./components/navbar";
import styled from "styled-components";
import Quiz from "./pages/Quiz";

const StyledWrapper = styled.div`
  .App {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    background-color: #000;
    color: #fff;
  }
`;

function Home() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="App">
      <div className="count">Button Clicked-{count} times</div>
      <button onClick={() => setCount((prev) => prev + 1)} className="">
        Click Me
      </button>
      <button onClick={() => navigate("/resume")}>Resume</button>
    </div>
  );
}

function App() {
  return (
    <StyledWrapper>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/spotify" element={<Spotify />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </StyledWrapper>
  );
}

export default App;
