import React from "react";
import "./resume.css";
function Resume() {
  return (
    <div className="resume-container">
      <div className="resume-card">
        <header className="resume-header">
          <h1 className="name">Rishab Chavadar</h1>
          <p className="subtitle">Computer Science and Engineering</p>
        </header>

        <section className="resume-section">
          <h2>Personal Details</h2>
          <ul>
            <li>
              <strong>Age:</strong> 21
            </li>
            <li>
              <strong>Gender:</strong> Male
            </li>
          </ul>
        </section>

        <section className="resume-section">
          <h2>Education</h2>
          <ul>
            <li>Degree: Bachelor of Technology</li>
            <li>Branch: Computer Science and Engineering</li>
            <li>CGPA:8.5</li>
          </ul>
        </section>

        <section className="resume-section">
          <h2>Skills</h2>
          <div className="skills-list">
            <span>Java</span>
            <span>Python</span>
            <span>C++</span>
            <span>React</span>
            <span>Node.js</span>
            <span>MongoDB</span>
            <span>Git</span>
            <span>GitHub</span>
          </div>
        </section>

        <section className="resume-section">
          <h2>Projects</h2>
          <ul className="projects-list">
            <li>Smart Attendance System</li>
            <li>Unified Career Advisor</li>
            <li>MERN Application for Pizza Ordering</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Resume;
