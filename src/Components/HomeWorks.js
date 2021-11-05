import React from 'react'

function HomeWorks() {
    return (
        <section id="projects-section" className="home-works">
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
                                        <div
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                height: '50px',
                                            }}
                                        >
                                            <a
                                                className="btn btn-work"
                                                href="https://costingh.github.io/chat-app"
                                                target="_blank"
                                            >
                                                View Project
                                            </a>

                                            <a
                                                className="btn-github"
                                                href="https://github.com/costingh/chat-app"
                                                target="_blank"
                                                style={{
                                                    marginTop: '32px',
                                                    marginLeft: '15px',
                                                }}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                </svg>
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
                                        <div
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                height: '50px',
                                            }}
                                        >
                                            <a
                                                className="btn btn-work"
                                                href="https://collaborative-whiteboard.vercel.app/"
                                                target="_blank"
                                            >
                                                View Project
                                            </a>

                                            <a
                                                className="btn-github"
                                                href="https://github.com/costingh/collaborative-whiteboard"
                                                target="_blank"
                                                style={{
                                                    marginTop: '32px',
                                                    marginLeft: '15px',
                                                }}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                </svg>
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
                                        <div
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                height: '50px',
                                            }}
                                        >
                                            <a
                                                className="btn btn-work"
                                                href="https://github.com/costingh/social-media-app-MERN"
                                                target="_blank"
                                            >
                                                View Project
                                            </a>

                                            <a
                                                className="btn-github"
                                                href="https://github.com/costingh/social-media-app-MERN"
                                                target="_blank"
                                                style={{
                                                    marginTop: '32px',
                                                    marginLeft: '15px',
                                                }}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                </svg>
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
                                        <div
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                height: '50px',
                                            }}
                                        >
                                            <a
                                                className="btn btn-work"
                                                href="https://costingh.github.io/deploy-pathfinding-visualiser/"
                                                target="_blank"
                                            >
                                                View Project
                                            </a>

                                            <a
                                                className="btn-github"
                                                href="https://github.com/costingh/Pathfinding-Algorithm-Visualiser"
                                                target="_blank"
                                                style={{
                                                    marginTop: '32px',
                                                    marginLeft: '15px',
                                                }}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                </svg>
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
