import React from 'react'
import '../styles/HomeHero.css'

function HomeHero({showContactModal}) {
    return (
        <section className="home-hero">
            <div className="hero-bg">
                <div className="hero-pattern-bg"><img className="hero-pattern-img__default" src="./assets/images/hero-pattern-bg.png" alt=""/><img className="hero-pattern-img__large" src="./assets/images/hero-pattern-bg-lg.png" alt=""/></div>
            </div>
            <div className="hero-character">
                <div className="hero-guy-1"><img className="hero-guy-1__default" src="./assets/images/hero-guy-1.png" alt=""/><img className="hero-guy-1__large" src="./assets/images/untitled.png" alt=""/></div>
            </div>
            <div className="hero-overlay"></div>
            <div className="hero-section">
                <div className="hero-container">
                    <div className="hero-text">
                        <h1>I'm Costin Gheorghe</h1>
                        <p>Computer science student</p>
                        <div className="hero-button-float">
                            <div className="hero-button-wrapper">
                                <button className="btn btn-white btn-talk" onClick={showContactModal}><i className="icon-pp-envelope"></i><span>Let's talk!</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeHero
