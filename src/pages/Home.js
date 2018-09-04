import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import "./Home.css";

/**
 * Asset
 */

import ProfilePic from "../assets/profile.jpg";
import uoftLogo from "../assets/uoft.png";
import QRcode from "./image/wechat.jpg";

class Home extends Component {
  state = {
    showModal: false
  };

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
            <img src={ProfilePic} alt="bg" />
          </div>
          <p className="in">- K.Y Bryan Chan, React Developer</p>
          <div className="MH-backgroundImg" />
        </div>

        <div className="HM-section HM-story">
          <h2>How Do I End Up With Coding?</h2>
          <br />
          <p>
            Well, when I was a kid, my dad put a password on my computer to
            prevent me from playing games. And I was like "Damn! let's crack the
            password".
          </p>
        </div>

        <div className="HM-section HM-info">
          <div className="HM-infoBlock">
            <h3>Skills</h3>
            <div className="HM-skill-list">
              {skills.map(s => {
                return <p key={s}>-{s}</p>;
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
              <img src={uoftLogo} alt="uoft" />
            </div>
          </div>
        </div>

        <div className="HM-section MH-contact">
          <a
            href="https://github.com/cky-BryanChan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github fa-2x HM-social-icon github" />
          </a>
          <a
            href="https://www.linkedin.com/in/cky-bryanchan/"
            target="_blank"
          >
            <i className="fa fa-linkedin-square fa-2x HM-social-icon linkedin" />
          </a>
          <i
            className="fa fa-weixin fa-2x HM-social-icon wechat"
            onClick={() => this.setState({ showModal: true })}
          />
        </div>

        <Modal
          show={this.state.showModal}
          onHide={() => this.setState({ showModal: false })}
        >
          <Modal.Body>
            <div className="HM-modal">
              <img src={QRcode} alt="QR" />
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
export default Home;
