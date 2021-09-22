import React from 'react'
import '../styles/Timeline.css'

function Timeline() {
    const timelineEvents = [
        {
            from: 'September 2015',
            to: 'May 2019',
            universityName: 'Matei Basarab National College',
            description: 'Mathematics & Computer Science',
            classes: [
                'Mathematics',
                'Computer science',
                'Physics',
            ]
        },
        {
            from: 'September 2019',
            to: 'Present',
            universityName: 'Politehnica University of Bucharest',
            description: 'Mathematics & Computer Science',
            classes: [
                'Computer science',
                'Mathematics',
                'Physics',
            ]
        },
    ]
    return (
        <section className="home-works" style={{margin: '300px 0 100px 0'}}>
            <div className="container">
                <div className="works-section">
                    <div className="section-title text-center">
                        <h2>Education</h2>
                    </div>
                    <div className="works-container">
                        <ul class="timeline">
                            {timelineEvents.map(event => {
                                return  <li class="timeline-event">
                                            <label class="timeline-event-icon"></label>
                                            <div class="timeline-event-copy">
                                                <p class="timeline-event-thumbnail">{event.from} - {event.to}</p>
                                                <h3>{event.universityName}</h3>
                                                <h4>{event.description}</h4>
                                                <ul className="disciplines">
                                                    {event.classes.map(discipline => <li className="discipline">{discipline}</li>)}
                                                </ul>
                                            </div>
                                        </li>
                            })}
                        </ul>  
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Timeline


/* 
<ul class="timeline">
            {timelineEvents.map(event => {
                return  <li class="timeline-event">
                            <label class="timeline-event-icon"></label>
                            <div class="timeline-event-copy">
                            <p class="timeline-event-thumbnail">{event.from} - {event.to}</p>
                            <h3>{event.universityName}</h3>
                            <h4>{event.description}</h4>
                            {event.classes.map(discipline => <p>{discipline}</p>)}
                            </div>
                        </li>
            })}
        </ul>  
         */
