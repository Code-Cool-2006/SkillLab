import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Resume from "./pages/resume";
import Login from "./pages/Login";

function Home() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="App">
      <div>Button Clicked-{count} times</div>
      <button onClick={() => setCount((prev) => prev + 1)}>Click Me</button>
      <button onClick={() => navigate("/resume")}>Resume</button>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
}

export default App;
