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
                                            <h3>Chat App</h3>
                                            <p>
                                                A web application which allows
                                                real time chatting. User can
                                                signup/login, add new contacts,
                                                delete them, see their info,
                                                start chatting and see online
                                                users.
                                            </p>
                                            {/* <p>Spring Boot, MongoDB, React</p> */}
                                        </div>
                                        <div>
                                            <a
                                                className="btn btn-work"
                                                href="https://costingh.github.io/chat-app"
                                                target="_blank"
                                            >
                                                View Project
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="work-image d-flex justify-content-center align-items-center">
                                    <img
                                        src="./assets/images/projects/undraw_share_opinion.svg"
                                        style={{ maxWidth: '90%' }}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="work-list lifecycle-works">
                            <div className="work-wrapper d-flex">
                                <div className="work-description">
                                    <div className="work-detail d-flex flex-column justify-content-between">
                                        <div>
                                            <h3>Collaborative Whiteboard</h3>
                                            <p>
                                                This app allows sharing a canvas
                                                online. Users can create a room
                                                or join one without creating an
                                                account. They can draw at the
                                                same time, erase drawings, save
                                                canvas or import one.
                                            </p>
                                        </div>
                                        <div>
                                            <a
                                                className="btn btn-work"
                                                href="https://collaborative-whiteboard.vercel.app/"
                                                target="_blank"
                                            >
                                                View Project
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="work-image d-flex justify-content-center align-items-center">
                                    <img
                                        src="./assets/images/projects/whiteboard.svg"
                                        style={{ maxWidth: '100%' }}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="work-list crisp-works">
                            <div className="work-wrapper d-flex">
                                <div className="work-description">
                                    <div className="work-detail d-flex flex-column justify-content-between">
                                        <div>
                                            <h3>Social Media App</h3>
                                            <p>
                                                A social media application that
                                                allows users to login/sign up,
                                                and perform tasks such as
                                                poosting pictures,
                                                liking/unliking posts,
                                                follow/unfollow another user,
                                                and chat using sockets.
                                            </p>
                                            {/* <p>Spring Boot, MongoDB, React</p> */}
                                        </div>
                                        <div>
                                            <a
                                                className="btn btn-work"
                                                href="https://github.com/costingh/social-media-app-MERN"
                                                target="_blank"
                                            >
                                                View Project
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="work-image d-flex justify-content-center align-items-center">
                                    <img
                                        src="./assets/images/projects/social-media.svg"
                                        style={{
                                            maxWidth: '90%',
                                        }}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="work-list lifecycle-works">
                            <div className="work-wrapper d-flex">
                                <div className="work-description">
                                    <div className="work-detail d-flex flex-column justify-content-between">
                                        <div>
                                            <h3>
                                                Pathfinding Algorithm Visualiser
                                            </h3>
                                            <p>
                                                App designed to illustrate how
                                                popular pathfinding algorithms
                                                (like Dijkstra, DFS, BFS, A*)
                                                work. The algorithms are
                                                implemented using JavaScript.
                                            </p>
                                        </div>
                                        <div>
                                            <a
                                                className="btn btn-work"
                                                href="https://costingh.github.io/deploy-pathfinding-visualiser/"
                                                target="_blank"
                                            >
                                                View Project
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="work-image d-flex justify-content-center align-items-center">
                                    <img
                                        src="./assets/images/projects/pathfinding.png"
                                        style={{
                                            maxWidth: '90%',
                                            borderRadius: '10px',
                                        }}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        {/* <div className="work-list calendar-works">
                            <div className="work-wrapper d-flex">
                                <div className="work-description">
                                    <div className="work-detail d-flex flex-column justify-content-between">
                                        <div>
                                            <h3>Project 3</h3>
                                            <p>Project 3 Description</p>
                                        </div>
                                        <div>
                                            <a
                                                className="btn btn-work"
                                                href="/"
                                                target="_blank"
                                            >
                                                View Project
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="work-image"></div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeWorks
