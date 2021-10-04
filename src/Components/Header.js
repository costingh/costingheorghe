import React, { useState } from 'react'
/* import ScrollSpy from 'react-scrollspy-navigation' */

import Scrollspy from 'react-scrollspy'

function Header({ showContactModal }) {
    const [mobileMenu, setMobileMenu] = useState(false)

    const toggleMenu = () => {
        const app = document.querySelector('.app')
        const headerMenu = document.querySelector('.header-menu')
        const mobileMenu = document.querySelector('.mobile-menu')

        /* if (app.classList.contains('fixed')) {
            app.classList.remove('fixed')
            headerMenu.classList.remove('open')
            mobileMenu.classList.remove('mobile')
            setMobileMenu(false)
        } else {
            app.classList.add('fixed')
            headerMenu.classList.add('open')
            mobileMenu.classList.add('mobile')
            setMobileMenu(true)
        } */

        if (headerMenu.classList.contains('open')) {
            headerMenu.classList.remove('open')
            mobileMenu.classList.remove('mobile')
            setMobileMenu(false)
        } else {
            headerMenu.classList.add('open')
            mobileMenu.classList.add('mobile')
            setMobileMenu(true)
        }
    }

    window.addEventListener('scroll', function () {
        let header = document.querySelector('header')
        let st = window.pageYOffset || document.documentElement.scrollTop // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"

        let lastScrollTop = 0
        if (st > lastScrollTop) {
            // downscroll code
            header.style.position = 'fixed'
            header.style.backgroundColor = 'rgba(100,100,100,1)'
            /*  header.style.backgroundImage =
                'linear-gradient(225deg, #1ad4bb, #b2de94)' */
            header.style.borderBottom = '1px solid #ef4b6c'
        } else {
            // upscroll code
            header.style.position = 'absolute'
            header.style.backgroundColor = 'transparent'
            header.style.borderBottom = 'none'
        }
    })

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
                            <Scrollspy
                                items={[
                                    'home-section',
                                    'about-section',
                                    'education-section',
                                    'skills-section',
                                    'services-section',
                                    'projects-section',
                                ]}
                                className="nav nav-light"
                                currentClassName="active"
                            >
                                {/* <ul className="nav nav-light"> */}
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="#home-section"
                                        ref={React.createRef()}
                                        onClick={mobileMenu && toggleMenu}
                                    >
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="#about-section"
                                        ref={React.createRef()}
                                        onClick={mobileMenu && toggleMenu}
                                    >
                                        About
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="#education-section"
                                        ref={React.createRef()}
                                        onClick={mobileMenu && toggleMenu}
                                    >
                                        Education
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="#skills-section"
                                        ref={React.createRef()}
                                        onClick={mobileMenu && toggleMenu}
                                    >
                                        Skills
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="#services-section"
                                        ref={React.createRef()}
                                        onClick={mobileMenu && toggleMenu}
                                    >
                                        Services
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="#projects-section"
                                        ref={React.createRef()}
                                        onClick={mobileMenu && toggleMenu}
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
                                {/* </ul> */}
                            </Scrollspy>
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
