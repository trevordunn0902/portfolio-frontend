// src/pages/Portfolio.jsx
import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section>
      <h1>My Work</h1>
      <p>Here are some of my favorite projects:</p>
      <ul className="project-list">
        <li className="project-card">
          <strong>Project 1:</strong> A full-stack web application built with React and Java Spring Boot.
        </li>
      </ul>
      <p>More projects coming soon!</p>
    </section>
  );
}

export default Portfolio;
