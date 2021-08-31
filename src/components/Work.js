import React from "react"
import Fade from "react-reveal/Fade"

const Work = () => {
  return (
    <div className="section" id="work">
      <div className="container">
        <div className="work-wrapper">
          <Fade bottom>
            <h1>Work</h1>
          </Fade>

          <div class="row work">

            <div>

              <h2>Leidos</h2>
              <p class="info">Software Engineering Intern <span>&bull;</span> <em class="date">May 2021 - August 2021</em></p>

              <p>
                Worked on the All-World Environment Simulation (AWESIM) project, a high-fidelity physics-based simulation of the generation and propagation of acoustic signals in the ocean for sonar trainers in the U.S. Navy. Developed and debugged code in C++, Python, and React.js. Followed the agile methodology with a Jira Kanban Board and used the Conan C++ package manager, RESTful web services, Jenkins, and Kubernetes
              </p>

            </div>


            <div>

              <h2>University of Virginia</h2>
              <p class="info">Teaching Assistant <span>&bull;</span> <em class="date">February 2021 - Present</em></p>

              <p>
                Assisting students with understanding computer architecture concepts and the x86 assembly language. Currently hosting weekly office hours, cohosting lab sections, and answering questions on Piazza.
              </p>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
