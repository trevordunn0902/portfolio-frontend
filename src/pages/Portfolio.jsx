// src/pages/Portfolio.jsx
import React from "react";
import "./Portfolio.css";

import project1Img from "../assets/projects/project1.jpg";
import project2Img from "../assets/projects/project2.jpg";
import project3Img from "../assets/projects/project3.jpg";

// helper to pick bubble color class
function getTechCategory(tech) {
  const frontend = ["HTML", "CSS", "JavaScript", "React", "React Native", "Figma"];
  const backend = ["Java", "Spring Boot", "Node.js", "Express"];
  const database = ["SQL", "PostgreSQL", "MongoDB"];

  if (frontend.includes(tech)) return "frontend";
  if (backend.includes(tech)) return "backend";
  if (database.includes(tech)) return "database";
  return "default";
}

function Portfolio() {
  const projects = [
    {
      title: "Project 1",
      description:
        "A full-stack web application built with React and Java Spring Boot.",
      image: project1Img,
      tech: ["HTML", "CSS", "React", "Java", "Spring Boot", "SQL"],
    },
    {
      title: "Project 2",
      description: "A mobile app prototype designed with Figma and React Native.",
      image: project2Img,
      tech: ["Figma", "React Native"],
    },
    {
      title: "Project 3",
      description: "A personal portfolio website made with HTML, CSS, and JS.",
      image: project3Img,
      tech: ["HTML", "CSS", "JavaScript"],
    },
  ];

  return (
    <section>
      <h1>My Work</h1>
      <p>Here are some of my favorite projects:</p>

      <ul className="project-list">
        {projects.map((project, index) => (
          <li key={index} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-content">
              <div className="project-title">{project.title}</div>
              <div className="project-desc">{project.description}</div>
              <div className="project-tech">
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className={`tech-bubble ${getTechCategory(item)}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
      <br></br>
      <p>More projects coming soon!</p>
    </section>
  );
}

export default Portfolio;
