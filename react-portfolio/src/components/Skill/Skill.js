import React, { useEffect } from 'react';

// Importing TagCloud for 3D Rotating Text Sphere
import TagCloud from 'TagCloud';

import '../../styles/Skill/Skill.scss';

const Skill = () => {
  return (
    <>
      <div className="skill">
        <div className="skill__main-container">
          <div className="skill__header" id="skill__heading">
            <h1 className="skill__heading-text">
              <span
                data-aos="fade-down"
                data-aos-delay="0"
                data-aos-offset="200"
              >
                S
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="200"
                data-aos-offset="200"
              >
                K
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="400"
                data-aos-offset="200"
              >
                I
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="600"
                data-aos-offset="200"
              >
                L
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="800"
                data-aos-offset="200"
              >
                L
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="1000"
                data-aos-offset="200"
              >
                .
              </span>
            </h1>
            {/* <h1 className="skill__heading-text skill__heading-resume">
              <span
                data-aos="fade-down"
                data-aos-delay="0"
                data-aos-offset="200"
              >
                R
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="200"
                data-aos-offset="200"
              >
                E
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="400"
                data-aos-offset="200"
              >
                S
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="600"
                data-aos-offset="200"
              >
                U
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="800"
                data-aos-offset="200"
              >
                M
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="1000"
                data-aos-offset="200"
              >
                E
              </span>
            </h1> */}
          </div>
          <div className="skill__inner-container">
            <div className="skill__info">
              <div className="skill__details-container">
                <div className="skill__details">
                  <h4>Programming Languages</h4>
                  <ul>
                    <li><span>Python, R, C, Java (Basics), SQL</span></li>
                  </ul>
                </div>
                <div className="skill__details">
                  <h4>Coursework</h4>
                  <ul>
                    <li><span>Data Structures and Algorithms (DSA)</span></li>
                    <li><span>Database Management Systems (DBMS)</span></li>
                    <li><span>Object-Oriented Programming (OOP)</span></li>
                    <li><span>Quantum Computing</span></li>
                  </ul>
                </div>
                <div className="skill__details">
                  <h4>Technologies</h4>
                  <ul>
                    <li><span>Machine Learning</span></li>
                    <li><span>Artificial Intelligence</span></li>
                    <li><span>Natural Language Processing</span></li>
                    <li><span>Deep Learning</span></li>
                    <li><span>Reinforcement Learning</span></li>
                  </ul>
                </div>
                <div className="skill__details">
                  <h4>Databases</h4>
                  <ul>
                    <li><span>SQL, MongoDB</span></li>
                  </ul>
                </div>
                <div className="skill__details">
                  <h4>Web Development</h4>
                  <ul>
                    <li><span>HTML, CSS, JavaScript, ReactJS</span></li>
                  </ul>
                </div>
                <div className="skill__details">
                  <h4>Tools</h4>
                  <ul>
                    <li><span>GitHub, VS Code, MySQL, RStudio, Google Colab</span></li>
                    <li><span>Postman, Swagger UI, Azure AI and Cognitive Services</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
