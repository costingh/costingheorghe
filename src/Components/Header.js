import React, { useState, useEffect } from 'react'
import ScrollSpy from 'react-scrollspy-navigation'

function Header({ showContactModal }) {
    const [color, setColor] = useState('#fff')

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

    window.addEventListener('scroll', function () {
        let header = document.querySelector('header')
        let mobileMenuBtn = document
            .querySelector('.mobile-menu')
            .querySelectorAll('span')
        let st = window.pageYOffset || document.documentElement.scrollTop // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"

        let lastScrollTop = 0
        if (st > lastScrollTop) {
            // downscroll code
            header.style.position = 'fixed'
            setColor('#212529')
            header.style.backgroundColor = '#fff'
            header.style.borderBottom = '1px solid #ef4b6c'

            for (let i = 0; i < mobileMenuBtn.length; i++)
                mobileMenuBtn[i].style.backgroundColor = '#212529'
        } else {
            // upscroll code
            header.style.position = 'absolute'
            setColor('#fff')
            header.style.backgroundColor = 'transparent'
            header.style.borderBottom = 'none'
            for (let i = 0; i < mobileMenuBtn.length; i++)
                mobileMenuBtn[i].style.backgroundColor = 'gray'
        }

        //lastScrollTop = st <= 0 ? 0 : st // For Mobile or negative scrolling
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
                            <ul className="nav nav-light">
                                <ScrollSpy>
                                    <li className="nav-item active">
                                        <a
                                            className="nav-link"
                                            href="#header-section"
                                            ref={React.createRef()}
                                            style={{ color: color }}
                                        >
                                            Home
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="#about-section"
                                            ref={React.createRef()}
                                            style={{ color: color }}
                                        >
                                            About
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="#education-section"
                                            ref={React.createRef()}
                                            style={{ color: color }}
                                        >
                                            Education
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="#skills-section"
                                            ref={React.createRef()}
                                            style={{ color: color }}
                                        >
                                            Skills
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="#services-section"
                                            ref={React.createRef()}
                                            style={{ color: color }}
                                        >
                                            Services
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="#projects-section"
                                            ref={React.createRef()}
                                            style={{ color: color }}
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
                                            style={{ color: color }}
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
