import React from 'react'

function Footer() {
    return (
        <footer>
            <div class="footer-bg">
                <div class="footer-pattern-bg">
                    <img
                        class="footer-pattern-bg__default"
                        src="./assets/images/footer-pattern-bg.png"
                    />
                    <img
                        class="footer-pattern-bg__large"
                        src="./assets/images/footer-pattern-bg-lg.png"
                    />
                </div>
            </div>
            <div class="footer-white-mask">
                <img
                    class="footer-white-mask__default"
                    src="./assets/images/footer-white-mask.png"
                />
                <img
                    class="footer-white-mask__large"
                    src="./assets/images/footer-white-mask-lg.png"
                />
            </div>
            <div class="footer-container">
                <div class="container">
                    <div class="footer-text text-center">
                        <p>Interested to work with us?</p>
                        <button
                            class="btn btn-primary btn-talk"
                            data-toggle="modal"
                            data-target="#contactModal"
                        >
                            Let's talk!
                        </button>
                    </div>
                    <div class="footer-social">
                        <div class="social-container d-flex justify-content-center">
                            <div class="social-wrapper">
                                <a href="#" target="_blank" title="Instagram">
                                    <i class="icon-pp-instagram"></i>
                                </a>
                            </div>
                            <div class="social-wrapper">
                                <a href="#" target="_blank" title="Dribbble">
                                    <i class="icon-pp-dribbble"></i>
                                </a>
                            </div>
                            <div class="social-wrapper">
                                <a href="#" target="_blank" title="Behance">
                                    <i class="icon-pp-behance"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
