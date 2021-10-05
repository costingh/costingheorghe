import React from 'react'

function About() {
    return (
        <section
            id="about-section"
            className="home-works"
            style={{ margin: '200px 0px' }}
        >
            <div className="container">
                <div className="works-section">
                    <div className="section-title text-center">
                        <h2>Who am I</h2>
                    </div>
                    <div className="works-container">
                        <div className="work-list lifecycle-works left">
                            <div className="work-wrapper d-flex">
                                <div className="work-image d-flex justify-content-center align-items-center">
                                    <img
                                        src="./assets/images/avatar2.png"
                                        alt=""
                                    />
                                </div>
                                <div className="work-description">
                                    <div className="work-detail d-flex flex-column justify-content-between">
                                        <div>
                                            <h3>About me</h3>
                                            <p>
                                                Hi! I’m Costin Gheorghe, and I’m
                                                a Computer Science student who
                                                has passion for building
                                                applications with intuitive
                                                functionality. I enjoy the
                                                process of turning ideas into
                                                reality using creative
                                                solutions. I’m always curious
                                                about learning new skills,
                                                tools, and concepts.
                                            </p>
                                        </div>
                                        <div>
                                            <a
                                                className="btn btn-work"
                                                href="costingh.github.io/costingheorghe/documents/resume.pdf"
                                                target="_blank"
                                            >
                                                See Resume
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
