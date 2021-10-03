import React, { useState, useEffect } from 'react'
import ScrollSpy from 'react-scrollspy-navigation'

function Header({ showContactModal }) {
    const toggleMenu = () => {
        const app = document.querySelector('.app')
        const headerMenu = document.querySelector('.header-menu')
        const mobileMenu = document.querySelector('.mobile-menu')

        if (app.classList.contains('fixed')) {
            app.classList.remove('fixed')
            headerMenu.classList.remove('open')
            mobileMenu.classList.remove('mobile')
        } else {
            app.classList.add('fixed')
            headerMenu.classList.add('open')
            mobileMenu.classList.add('mobile')
        }
    }

    return (
        <header id="header-section">
            <div className="header-container">
                <div className="container">
                    <div className="header-section d-flex justify-content-center align-items-center">
                        {/* <div className="header-logo">
                            <a href="#header-section" ref={React.createRef()}>
                                <img
                                    src="./assets/images/projects/logo.png"
                                    alt=""
                                />
                            </a>
                        </div> */}
                        <div className="header-menu">
                            <ul className="nav nav-light">
                                <ScrollSpy>
                                    <li className="nav-item active">
                                        <a
                                            className="nav-link"
                                            href="#header-section"
                                            ref={React.createRef()}
                                        >
                                            Home
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="#about-section"
                                            ref={React.createRef()}
                                        >
                                            About
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="#education-section"
                                            ref={React.createRef()}
                                        >
                                            Education
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="#skills-section"
                                            ref={React.createRef()}
                                        >
                                            Skills
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="#services-section"
                                            ref={React.createRef()}
                                        >
                                            Services
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="#projects-section"
                                            ref={React.createRef()}
                                        >
                                            Projects
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <span
                                            className="nav-link"
                                            data-toggle="modal"
                                            data-target="#contactModal"
                                            onClick={showContactModal}
                                        >
                                            Contact
                                        </span>
                                    </li>
                                </ScrollSpy>
                            </ul>
                            <div className="mobile-menu" onClick={toggleMenu}>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
