import React from 'react'
import '../styles/Header.css';

function Header({showContactModal}) {
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
                            <div className="mobile-menu"><span></span><span></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
