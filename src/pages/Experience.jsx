// src/pages/Experience.jsx
import { useState } from 'react';
import './Experience.css';

function Experience() {
  const [activeTab, setActiveTab] = useState("work"); // "work" or "education"

  return (
    <section className="experience-section">
      <h1>Experience</h1>
      <p>
        Welcome to my Experience page! Here, I’ll showcase my professional and project
        experiences, highlighting skills and achievements.
      </p>

      {/* Tab Buttons */}
      <div className="experience-tabs">
        <button 
          className={activeTab === "work" ? "active" : ""} 
          onClick={() => setActiveTab("work")}
        >
          Work Experience
        </button>
        <button 
          className={activeTab === "education" ? "active" : ""} 
          onClick={() => setActiveTab("education")}
        >
          Education
        </button>
      </div>

      {/* Work Experience Timeline */}
      <div className={`fade ${activeTab === "work" ? "visible" : ""}`}>
        {activeTab === "work" && (
          <div className="timeline">
            <h2>Work Experience</h2>
            <div className="timeline-items">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>Deicer, Inland Technologies Canada</h3>
                  <span className="timeline-date">Sep 2024 – Apr 2025</span>
                  <ul>
                    <li>Deicing aircraft using procedures created by the company using deicing trucks.</li>
                    <li>Operate large trucks, booms and nozzles.</li>
                    <li>Coordinate within a team to ensure safety and efficiency.</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>Customer Support Associate, Tech Mahindra</h3>
                  <span className="timeline-date">Jun 2024 – Aug 2024</span>
                  <ul>
                    <li>Followed outlined processes to resolve technical issues, complaints or other inquiries in a timely manner.</li>
                    <li>Responded to calls from customers about various phone services.</li>
                    <li>Handled technical-related questions as needed.</li>
                    <li>Documented customer issues in the client system and updated customer records.</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>Information Technology Student, Immigration, Refugees and Citizenship Canada</h3>
                  <span className="timeline-date">Sep 2022 – Dec 2022</span>
                  <ul>
                    <li>Responded to client requests through tickets, ensuring timely resolution of issues.</li>
                    <li>Experience setting up and resolving application issues, along with Windows 7, 10, 11.</li>
                    <li>Resolved physical issues with hardware, such as hard drives, mice, keyboards, and monitors.</li>
                    <li>Collaborated with other support groups and team members to resolve large-scale issues.</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>WalkMe Test Team, Global Affairs Canada</h3>
                  <span className="timeline-date">May 2022 – Aug 2022</span>
                  <ul>
                    <li>Created and modified WalkMe walkthroughs, following company and accessibility standards.</li>
                    <li>Tested applications and documented successes and errors including photos.</li>
                    <li>Utilized automation and manual testing to ensure full application functionality.</li>
                    <li>Communicated with team members and leads to track completed tasks, errors, bugs, and other information.</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>Quality Assurance Analyst, Global Affairs Canada</h3>
                  <span className="timeline-date">Jan 2021 – Apr 2021</span>
                  <ul>
                    <li>Created and modified test cases to ensure effective functionality coverage and adherence to standards.</li>
                    <li>Prepared test data sets to support execution of test cases.</li>
                    <li>Executed test cases, documented results; reported issues to developers using bug management systems.</li>
                    <li>Developed automation test cases to streamline repetitive testing processes.</li>
                    <li>Maintained clear documentation of test procedures, ensuring reproducibility; communicated known issues to leads and developers.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Education Timeline */}
      <div className={`fade ${activeTab === "education" ? "visible" : ""}`}>
        {activeTab === "education" && (
          <div className="timeline">
            <h2>Education</h2>
            <div className="timeline-items">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>Computer Engineering Technology - Computer Science</h3>
                  <span className="timeline-date">Sep 2020 – Aug 2023</span>
                  <p>Algonquin College, Ottawa ON</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Experience;
