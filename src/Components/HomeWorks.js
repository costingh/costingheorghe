import React from 'react'

function HomeWorks() {
    return (
        <section className="home-works">
            <div className="container">
                <div className="works-section">
                    <div className="section-title text-center">
                        <h2>My Latest Works</h2>
                    </div>
                    <div className="works-container">
                        <div className="work-list crisp-works">
                            <div className="work-wrapper d-flex">
                                <div className="work-description">
                                    <div className="work-detail d-flex flex-column justify-content-between">
                                        <div>
                                            <h3>Project 1</h3>
                                            <p>Project 1 Description</p>
                                        </div>
                                        <div><a className="btn btn-work" href="/" target="_blank">View Project</a></div>
                                    </div>
                                </div>
                                <div className="work-image d-flex justify-content-center align-items-center"><img src="./assets/images/crisp-works.png" alt=""/></div>
                            </div>
                        </div>
                        <div className="work-list lifecycle-works">
                            <div className="work-wrapper d-flex">
                                <div className="work-description">
                                    <div className="work-detail d-flex flex-column justify-content-between">
                                        <div>
                                            <h3>Project 2</h3>
                                            <p>Project 2 Description</p>
                                        </div>
                                        <div><a className="btn btn-work" href="/" target="_blank">View Project</a></div>
                                    </div>
                                </div>
                                <div className="work-image d-flex justify-content-center align-items-center"><img src="./assets/images/lifecycle-works.png" alt=""/></div>
                            </div>
                        </div>
                        <div className="work-list calendar-works">
                            <div className="work-wrapper d-flex">
                                <div className="work-description">
                                    <div className="work-detail d-flex flex-column justify-content-between">
                                        <div>
                                            <h3>Project 3</h3>
                                            <p>Project 3 Description</p>
                                        </div>
                                        <div><a className="btn btn-work" href="/" target="_blank">View Project</a></div>
                                    </div>
                                </div>
                                <div className="work-image"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeWorks
