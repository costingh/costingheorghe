import React from 'react'
import '../styles/Header.css';

function Header({showContactModal}) {
    const toggleMenu = () => {
        const app = document.querySelector('.app');
        const headerMenu = document.querySelector('.header-menu');
        const mobileMenu = document.querySelector('.mobile-menu');

        if(app.classList.contains('fixed')) {
            app.classList.remove('fixed');
            headerMenu.classList.remove('open');
            mobileMenu.classList.remove('mobile');
        } else {
            app.classList.add('fixed');
            headerMenu.classList.add('open');
            mobileMenu.classList.add('mobile');
        }
    }

    return (
        <header>
            <div className="header-container">
                <div className="container">
                    <div className="header-section d-flex justify-content-between align-items-center">
                        <div className="header-logo"><a href="/"><img src="./assets/images/logo-light.png" alt=""/></a></div>
                        <div className="header-menu">
                            <ul className="nav nav-light">
                                <li className="nav-item active"><a className="nav-link" href="/">Home</a></li>
                                <li className="nav-item"><a className="nav-link" href="blog">Blog</a></li>
                                <li className="nav-item"><span className="nav-link" data-toggle="modal" data-target="#contactModal" onClick={showContactModal}>Contact</span></li>
                            </ul>
                            <div className="mobile-menu" onClick={toggleMenu}><span></span><span></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
