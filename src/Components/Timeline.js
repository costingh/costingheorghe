import React from 'react'
import '../styles/Timeline.css'
import { timelineEvents } from '../utils/constants'

function Timeline() {
    return (
        <section
            id="education-section"
            className="home-works"
            style={{ margin: '300px 0 100px 0' }}
        >
            <div className="container">
                <div className="works-section">
                    <div className="section-title text-center">
                        <h2>Education</h2>
                    </div>
                    <div className="works-container">
                        <ul className="timeline">
                            {timelineEvents.map((event, index) => {
                                return (
                                    <li className="timeline-event" key={index}>
                                        <label className="timeline-event-icon"></label>
                                        <div className="timeline-event-copy">
                                            <p className="timeline-event-thumbnail">
                                                {event.from} - {event.to}
                                            </p>
                                            <h3>{event.universityName}</h3>
                                            <h4>{event.description}</h4>
                                            <ul className="disciplines">
                                                {event.classes.map(
                                                    (discipline) => (
                                                        <li
                                                            className="discipline"
                                                            key={discipline}
                                                        >
                                                            {discipline}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Timeline
