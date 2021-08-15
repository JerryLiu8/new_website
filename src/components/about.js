import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const About = () => {
  return (
    <div className="section" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>About Me</h1>
            </Fade>
            <p>
              {data.aboutParaOne}
            </p>
          </div>
          <div className="resume-transcript">
            <a
                href="https://github.com/JerryLiu8/resume/raw/main/Jerry%20Liu%20Resume.pdf"
                className="primary-btn"
              >
                Download Resume
              </a>
              <a
                href="https://github.com/JerryLiu8/transcript/raw/main/Jerry%20Liu%20Transcript.pdf"
                className="primary-btn"
              >
                Download Transcript
              </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
