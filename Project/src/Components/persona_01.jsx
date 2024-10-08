import React from 'react';
import img from '../Components/img.jpg';
import '../App.css';

function Persona_01() {
  return (
    <div className="resume-container">
      <div className="header">
        <h1>Helene <span>Paquet</span></h1>
        <p>reallygreatsite.com</p>
        <p>@reallygreatsite</p>
        <p>+123-456-7890</p>
      </div>

      <div className="about-section">
        <div className="profile-pic">
          <img src={img} alt="Portrait of Helene Paquet" className="rounded-full w-32 h-32 object-cover" />
        </div>
        
        <div className="about-text ml-15">
          <h2 className="ml-5">About Me</h2>
          <p className="font-serif ml-5">
            Talented, versatile, and out-of-the-box graphic designer with seven
            years of experience. Expert in using all major graphic design
            platforms and experienced in advanced color theory.
          </p>
        </div>
      </div>

      <div className="skills-section">
        <h2>Skills</h2>
        <ul>
          <li>Graphic Design</li>
          <li>Creative Concepts</li>
          <li>Free Hand Sketch</li>
        </ul>
      </div>

      <div className="career-section">
        <h2>Professional Career</h2>
        <div className="job">
          <h3>Graphic Designer</h3>
          <p style={{ padding: 8 }}>Studio Showde - 2020</p>
          <ul>
            <li>Built browser user interfaces with basic knowledge of HTML, CSS, and JavaScript</li>
            <li>Developed a user-friendly keyboard and maintained a functional keyboard layout</li>
          </ul>
        </div>
        
        <div className="job">
          <h3>Senior Designer</h3>
          <p style={{ padding: 8 }}>Poucek and Lage - 2021</p>
          <ul>
            <li>Created various design work for clients using Adobe Illustrator and Photoshop</li>
            <li>Led and coordinated graphic design projects from conception to completion</li>
          </ul>
        </div>
      </div>

      <div className="education-section">
        <h2>Education</h2>
        <ul>
          <li>2010 - Graphic Designer - Ingoode Company</li>
          <li>2010 - Art Business - Hanover and Tyke</li>
        </ul>
      </div>
    </div>
  );
}

export default Persona_01;
