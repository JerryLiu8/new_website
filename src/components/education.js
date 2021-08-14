import React from "react"
import Fade from "react-reveal/Fade"

const Education = () => {
    return (
        <div className="section" id="education">
            <div className="container">
                <div className="education-wrapper">
                    <Fade bottom>
                        <h1>Education</h1>
                    </Fade>

                    <div class="row education">

                        <div>

                            <h2>University of Virginia</h2>
                            <p class="info">Bachelor of Science <span>&bull;</span> <em class="date">August 2019 - Present</em></p>

                            <p>
                                Currently pursuing a Bachelor of Science in Computer Science. <br></br><br></br>
                                <strong>Relevant Courses:</strong> Operating Systems, Databases, Mobile Application Development, Advanced Software Development Techniques, Computer Networks, Artificial Intelligence, Intro to Computer Vision, Computer Architecture, Machine Learning, Algorithms, Theory of Computation, Program and Data Representation, Digital Logic Design, Discrete Math, Software Development Methods, Ordinary Differential Equations, Probability Theory, Linear Algebra, Mathematics of Information, Statistics
                            </p>

                        </div>


                        <div>

                            <h2>Thomas Jefferson High School for Science and Technology</h2>
                            <p class="info">Advanced Studies Diploma <span>&bull;</span> <em class="date">September 2015 - June 2019</em></p>

                            <p>
                                Completed an Advanced Studies Diploma focusing on Computer Science. <br></br><br></br>
                                <strong>Relevant Courses:</strong> AP Computer Science A plus Data Structures, AP Calculus BC, AP Physics C, Multivariable Calculus, Linear Algebra, Artificial Intelligence, Parallel Computing, Computer Vision, Computer Systems Research

                            </p>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education
