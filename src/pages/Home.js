import React, { Component } from "react";
import ProfilePic from "../assets/profile.jpg";
import uoftLogo from "../assets/uoft.png";
import "./Home.css";

class Home extends Component {
  render() {
    const skills = [
      "cracking password (Obviously)",
      "React JS",
      "React Native",
      "HTML",
      "CSS",
      "blah blah blah..."
    ];
    return (
      <div className="HM-container">

        <div className="HM-section HM-proflie">
          <div className="HM-profilepic">
            <img src={ProfilePic} alt="bg"/>
          </div>
          <p className="in">- K.Y Bryan Chan, React Developer</p>
          <div className="MH-backgroundImg" />
        </div>

        <div className="HM-section HM-story">
          <h2>How Do I End Up With Coding?</h2>
          <br />
          <p>
            Well, when I was a kid, my dad put a password on my computer and I
            can't play games with it anymore. And I was like "Damn! let's crack
            the password".
          </p>
        </div>

        <div className="HM-section HM-info">
          <div className="HM-infoBlock">
            <h3>Skills</h3>
            <div className="HM-skill-list">
              {skills.map(s => {
                return <p key="s">-{s}</p>;
              })}
            </div>
          </div>

          <div className="HM-infoBlock">
            <h3>Education</h3>
            <div className="HM-education">
              <p>
                Bachelor of Applied Science (Computer Engineering) degree at
                University of Toronto
              </p>
              <img src={uoftLogo} alt="uoft"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
