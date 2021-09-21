import React from 'react'
import '../styles/HomeHero.css'

function HomeHero({showContactModal}) {
    return (
        <section class="home-hero">
            <div class="hero-bg">
                <div class="hero-pattern-bg"><img class="hero-pattern-img__default" src="./assets/images/hero-pattern-bg.png"/><img class="hero-pattern-img__large" src="./assets/images/hero-pattern-bg-lg.png"/></div>
            </div>
            <div class="hero-character">
                <div class="hero-guy-1"><img class="hero-guy-1__default" src="./assets/images/hero-guy-1.png"/><img class="hero-guy-1__large" src="./assets/images/untitled.png"/></div>
            </div>
            <div class="hero-overlay"></div>
            <div class="hero-section">
                <div class="hero-container">
                    <div class="hero-text">
                        <h1>I'm Costin Gheorghe</h1>
                        <p>Computer science student</p>
                        <div class="hero-button-float">
                            <div class="hero-button-wrapper">
                                <button class="btn btn-white btn-talk" onClick={showContactModal}><i class="icon-pp-envelope"></i><span>Let's talk!</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeHero
