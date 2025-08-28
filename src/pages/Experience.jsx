// src/pages/Experience.jsx
import './Experience.css';


function Experience() {
  return (
    <section className="experience-section">
      <h1>Experience</h1>
      <p>
        Welcome to my Experience page! Here, I’ll showcase my professional and project
        experiences, highlighting skills and achievements.
      </p>

      <div>
        <h2>Work Experience</h2>
        <ul>
          <li>
            <strong>Deicer, Inland Technologies Canada</strong> (Sep 2024 – Apr 2025)  
            – Operated large trucks and deicing equipment in a safety-focused team environment.
          </li>
          <li>
            <strong>Co-op Student, Global Affairs Canada</strong>  
            – Assisted in software development and IT support tasks.
          </li>
          <li>
            <strong>Co-op Student, Immigration, Refugees and Citizenship Canada</strong>  
            – Worked with internal applications and troubleshooting.
          </li>
        </ul>
      </div>

      <div>
        <h2>Projects</h2>
        <ul>
          <li>Full-stack application showcasing CRUD functionality.</li>
          <li>Personal portfolio website (this site!).</li>
        </ul>
      </div>
    </section>
  );
}


export default Experience;