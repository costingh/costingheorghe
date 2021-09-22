import React from 'react'
import '../styles/HomeServices.css'

function HomeServices() {
    return (
        <section class="home-services">
            <div class="container">
                <div class="services-section">
                    <div class="section-title text-center">
                        <h2>What I Do</h2>
                    </div>
                    <div class="services-container">
                        <div class="row justify-content-center">
                            <div class="col-sm-4 col-6">
                                <div class="service-wrapper">
                                    <div class="service-image">
                                        <div class="service-icon">
                                            <div class="icon-object">
                                                <img src="./assets/images/services/ux-ui-icon.png" width="100px" alt=""/>
                                            </div>
                                            <div class="icon-mask">
                                                {/* <svg width="200px" height="200px" viewBox="0 0 200 200" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                                    <defs>
                                                        <lineargradient id="ui-linearGradient-1" x1="35.6647303%" y1="31.8975636%" x2="76.464791%" y2="81.5711661%">
                                                            <stop stop-color="#9CB3FF" offset="0%"></stop>
                                                            <stop stop-color="#B0FFE9" offset="100%"></stop>
                                                        </lineargradient>
                                                        <clipPath id="ui-particle">
                                                            <path id="uiRect1" d="M86,83 L88,83 L88,81 L86,81 L86,83 Z M90,79 L90,85 L84,85 L84,79 L90,79 Z" fill="#FFFFFF" fill-rule="nonzero" transform="translate(87.000000, 82.000000) rotate(-315.000000) translate(-87.000000, -82.000000) "></path>
                                                            <path id="uiRect2" d="M92,122 L93,122 L93,121 L92,121 L92,122 Z M95,119 L95,124 L90,124 L90,119 L95,119 Z" fill="#FFFFFF" fill-rule="nonzero" transform="translate(92.500000, 121.500000) rotate(-315.000000) translate(-92.500000, -121.500000) "></path>
                                                            <path id="uiRect3" d="M125,108 L126,108 L126,107 L125,107 L125,108 Z M128,105 L128,110 L123,110 L123,105 L128,105 Z" fill="#FFFFFF" fill-rule="nonzero" transform="translate(125.500000, 107.500000) rotate(-315.000000) translate(-125.500000, -107.500000) "></path>
                                                            <path id="uiRect4" d="M86,83 L88,83 L88,81 L86,81 L86,83 Z M90,79 L90,85 L84,85 L84,79 L90,79 Z" fill="#FFFFFF" fill-rule="nonzero" transform="translate(87.000000, 82.000000) rotate(-315.000000) translate(-87.000000, -82.000000) "></path>
                                                        </clipPath>
                                                    </defs>
                                                    <g id="UI-Mask-Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <g id="uiMask" clip-path="url(#ui-particle)">
                                                            <rect id="uiRectMask" fill="url(#ui-linearGradient-1)" x="0" y="0" width="200" height="200"></rect>
                                                            <circle id="uiCircleMask" fill="#FFFFFF" cx="100.5" cy="100.5" r="38.5" opacity=".7"></circle>
                                                        </g>
                                                    </g>
                                                </svg> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="service-detail text-center">
                                        <h3>UI/UX</h3>
                                        <p>Landing Pages, User Flow, Wireframing, Prototyping</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4 col-6">
                                <div class="service-wrapper">
                                    <div class="service-image">
                                        <div class="service-icon">
                                            <div class="icon-object">
                                                <img src="./assets/images/services/command-line-icon.png" width="100px" alt=""/>
                                            </div>
                                            <div class="icon-mask">
                                                {/* <svg width="200px" height="200px" viewBox="0 0 200 200" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                                    <title>Illustration</title>
                                                    <desc>Created with Sketch.</desc>
                                                    <defs>
                                                        <lineargradient id="linearGradient-1" x1="63.8378906%" y1="69.4511719%" x2="22.890625%" y2="26.2285156%">
                                                            <stop stop-color="#E7D1FF" offset="0%"></stop>
                                                            <stop stop-color="#8383EF" offset="100%"></stop>
                                                        </lineargradient>
                                                        <clipPath id="illus-particle">
                                                            <path id="illusCircle1" d="M82.5,86 C80.5670034,86 79,84.4329966 79,82.5 C79,80.5670034 80.5670034,79 82.5,79 C84.4329966,79 86,80.5670034 86,82.5 C86,84.4329966 84.4329966,86 82.5,86 Z M82.5,84 C83.3284271,84 84,83.3284271 84,82.5 C84,81.6715729 83.3284271,81 82.5,81 C81.6715729,81 81,81.6715729 81,82.5 C81,83.3284271 81.6715729,84 82.5,84 Z" fill="#FFFFFF" fill-rule="nonzero"></path>
                                                            <path id="illusCircle2" d="M117.5,89 C116.119288,89 115,87.8807119 115,86.5 C115,85.1192881 116.119288,84 117.5,84 C118.880712,84 120,85.1192881 120,86.5 C120,87.8807119 118.880712,89 117.5,89 Z M117.5,87 C117.776142,87 118,86.7761424 118,86.5 C118,86.2238576 117.776142,86 117.5,86 C117.223858,86 117,86.2238576 117,86.5 C117,86.7761424 117.223858,87 117.5,87 Z" fill="#FFFFFF" fill-rule="nonzero"></path>
                                                            <path id="illusCircle3" d="M107.5,123 C106.119288,123 105,121.880712 105,120.5 C105,119.119288 106.119288,118 107.5,118 C108.880712,118 110,119.119288 110,120.5 C110,121.880712 108.880712,123 107.5,123 Z M107.5,121 C107.776142,121 108,120.776142 108,120.5 C108,120.223858 107.776142,120 107.5,120 C107.223858,120 107,120.223858 107,120.5 C107,120.776142 107.223858,121 107.5,121 Z" fill="#FFFFFF" fill-rule="nonzero"></path>
                                                            <path id="illusCircle4" d="M82.5,86 C80.5670034,86 79,84.4329966 79,82.5 C79,80.5670034 80.5670034,79 82.5,79 C84.4329966,79 86,80.5670034 86,82.5 C86,84.4329966 84.4329966,86 82.5,86 Z M82.5,84 C83.3284271,84 84,83.3284271 84,82.5 C84,81.6715729 83.3284271,81 82.5,81 C81.6715729,81 81,81.6715729 81,82.5 C81,83.3284271 81.6715729,84 82.5,84 Z" fill="#FFFFFF" fill-rule="nonzero"></path>
                                                        </clipPath>
                                                    </defs>
                                                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <g id="illusMask" clip-path="url(#illus-particle)">
                                                            <rect id="illusRectMask" fill="url(#linearGradient-1)" x="0" y="0" width="200" height="200"></rect>
                                                            <circle id="illusCircleMask" fill="#FFFFFF" cx="100.5" cy="100.5" r="38.5" opacity=".7"></circle>
                                                        </g>
                                                    </g>
                                                </svg> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="service-detail text-center">
                                        <h3>Backend</h3>
                                        <p>Java, Javascript, Spring Boot, Web App</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4 col-6">
                                <div class="service-wrapper">
                                    <div class="service-image">
                                        <div class="service-icon">
                                            <div class="icon-object">
                                                <img src="./assets/images/services/icon-illustration.png" width="100px" alt=""/>
                                            </div>
                                            <div class="icon-mask">
                                                {/* <svg width="200px" height="200px" viewBox="0 0 200 200" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                                    
                                                    <title>Branding</title>
                                                    <desc>Created with Sketch.</desc>
                                                    <defs>
                                                        <lineargradient id="brand-linearGradient-1" x1="31.0546875%" y1="31.0136719%" x2="61.1679688%" y2="69.2753906%">
                                                            <stop stop-color="#FF8989" offset="0%"></stop>
                                                            <stop stop-color="#FFDDC5" offset="100%"></stop>
                                                        </lineargradient>
                                                        <clipPath id="brand-particle">
                                                            <path id="brandTri1" d="M118.577311,88 L122.524037,88 L120.550674,84.7110611 L118.577311,88 Z M124.239023,86.9710085 C124.80732,87.918169 124.500189,89.1466895 123.553029,89.7149859 C123.242198,89.9014843 122.886525,90 122.524037,90 L118.577311,90 C117.472741,90 116.577311,89.1045695 116.577311,88 C116.577311,87.6375121 116.675826,87.2818393 116.862325,86.9710085 L118.835688,83.6820696 C119.403985,82.7349091 120.632505,82.4277789 121.579666,82.9960753 C121.861165,83.1649748 122.09676,83.4005704 122.26566,83.6820696 L124.239023,86.9710085 Z" fill="#FFFFFF" fill-rule="nonzero"></path>
                                                            <path id="brandTri2" d="M81,88.9436506 L79.7661904,91 L82.2338096,91 L81,88.9436506 Z M83.9487955,89.9710085 C84.5170918,90.918169 84.2099617,92.1466895 83.2628011,92.7149859 C82.9519703,92.9014843 82.5962975,93 82.2338096,93 L79.7661904,93 C78.6616209,93 77.7661904,92.1045695 77.7661904,91 C77.7661904,90.6375121 77.864706,90.2818393 78.0512045,89.9710085 L79.2850141,87.9146591 C79.8533105,86.9674986 81.081831,86.6603685 82.0289915,87.2286648 C82.3104907,87.3975643 82.5460863,87.6331599 82.7149859,87.9146591 L83.9487955,89.9710085 Z" fill="#FFFFFF" fill-rule="nonzero"></path>
                                                            <path id="brandTri3" d="M114,118.943651 L112.76619,121 L115.23381,121 L114,118.943651 Z M116.948795,119.971008 C117.517092,120.918169 117.209962,122.14669 116.262801,122.714986 C115.95197,122.901484 115.596298,123 115.23381,123 L112.76619,123 C111.661621,123 110.76619,122.104569 110.76619,121 C110.76619,120.637512 110.864706,120.281839 111.051205,119.971008 L112.285014,117.914659 C112.85331,116.967499 114.081831,116.660368 115.028992,117.228665 C115.310491,117.397564 115.546086,117.63316 115.714986,117.914659 L116.948795,119.971008 Z" fill="#FFFFFF" fill-rule="nonzero"></path>
                                                            <path id="brandTri4" d="M118.577311,88 L122.524037,88 L120.550674,84.7110611 L118.577311,88 Z M124.239023,86.9710085 C124.80732,87.918169 124.500189,89.1466895 123.553029,89.7149859 C123.242198,89.9014843 122.886525,90 122.524037,90 L118.577311,90 C117.472741,90 116.577311,89.1045695 116.577311,88 C116.577311,87.6375121 116.675826,87.2818393 116.862325,86.9710085 L118.835688,83.6820696 C119.403985,82.7349091 120.632505,82.4277789 121.579666,82.9960753 C121.861165,83.1649748 122.09676,83.4005704 122.26566,83.6820696 L124.239023,86.9710085 Z" fill="#FFFFFF" fill-rule="nonzero"></path>
                                                        </clipPath>
                                                    </defs>
                                                    <g id="Brand-Mask-Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <g id="brandMask" clip-path="url(#brand-particle)">
                                                            <rect id="brandRectMask" fill="url(#brand-linearGradient-1)" x="0" y="0" width="200" height="200"></rect>
                                                            <circle id="brandCircleMask" fill="#FFFFFF" cx="100.5" cy="100.5" r="38.5" opacity=".7"></circle>
                                                        </g>
                                                    </g>
                                                </svg> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="service-detail text-center">
                                        <h3>Icon/Illustration</h3>
                                        <p>Character Design, Icon Set, Illustration Set</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4 col-6">
                                <div class="service-wrapper">
                                    <div class="service-image">
                                        <div class="service-icon">
                                            <div class="icon-object">
                                                <img src="./assets/images/services/frontend-icon.png" width="100px" alt=""/>
                                            </div>
                                            <div class="icon-mask">
                                                {/* <svg width="200px" height="200px" viewBox="0 0 200 200" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                                    
                                                    <title>Frontend</title>
                                                    <desc>Created with Sketch.</desc>
                                                    <defs>
                                                        <lineargradient id="fe-linearGradient-1" x1="30.9335938%" y1="31.1699219%" x2="69.8867188%" y2="69.7148438%">
                                                            <stop stop-color="#FFA8E8" offset="0%"></stop>
                                                            <stop stop-color="#FFE6E6" offset="100%"></stop>
                                                        </lineargradient>
                                                        <clipPath id="fe-particle">
                                                            <path id="feRect1" d="M84,81 L84,84 L87,84 L87,81 L84,81 Z M84,79 L87,79 C88.1045695,79 89,79.8954305 89,81 L89,84 C89,85.1045695 88.1045695,86 87,86 L84,86 C82.8954305,86 82,85.1045695 82,84 L82,81 C82,79.8954305 82.8954305,79 84,79 Z" fill="#FFFFFF" fill-rule="nonzero"></path>
                                                            <path id="feRect2" d="M90,120 L90,121 L91,121 L91,120 L90,120 Z M90,118 L91,118 C92.1045695,118 93,118.895431 93,120 L93,121 C93,122.104569 92.1045695,123 91,123 L90,123 C88.8954305,123 88,122.104569 88,121 L88,120 C88,118.895431 88.8954305,118 90,118 Z" fill="#FFFFFF" fill-rule="nonzero"></path>
                                                            <path id="feRect3" d="M123,108 L123,109 L124,109 L124,108 L123,108 Z M123,106 L124,106 C125.104569,106 126,106.895431 126,108 L126,109 C126,110.104569 125.104569,111 124,111 L123,111 C121.895431,111 121,110.104569 121,109 L121,108 C121,106.895431 121.895431,106 123,106 Z" fill="#FFFFFF" fill-rule="nonzero"></path>
                                                            <path id="feRect4" d="M84,81 L84,84 L87,84 L87,81 L84,81 Z M84,79 L87,79 C88.1045695,79 89,79.8954305 89,81 L89,84 C89,85.1045695 88.1045695,86 87,86 L84,86 C82.8954305,86 82,85.1045695 82,84 L82,81 C82,79.8954305 82.8954305,79 84,79 Z" fill="#FFFFFF" fill-rule="nonzero"></path>
                                                        </clipPath>
                                                    </defs>
                                                    <g id="Fe-Mask-Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <g id="feMask" clip-path="url(#fe-particle)">
                                                            <rect id="feRectmask" fill="url(#fe-linearGradient-1)" x="0" y="0" width="200" height="200"></rect>
                                                            <circle id="feCircleMask" fill="#FFFFFF" cx="100.5" cy="100.5" r="38.5" opacity=".7"></circle>
                                                        </g>
                                                    </g>
                                                </svg> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="service-detail text-center">
                                        <h3>Frontend</h3>
                                        <p>Javascript, React.js, Next.js, Responsive Web App</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4 col-6">
                                <div class="service-wrapper">
                                    <div class="service-image">
                                        <div class="service-icon">
                                            <div class="icon-object">
                                                <img src="./assets/images/services/api-integration-icon.png" width="100px" alt=""/>
                                            </div>
                                            <div class="icon-mask">
                                                {/* <svg width="200px" height="200px" viewBox="0 0 200 200" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                                    
                                                    <title>Animation</title>
                                                    <desc>Created with Sketch.</desc>
                                                    <defs>
                                                        <lineargradient id="anim-linearGradient-1" x1="30.9785156%" y1="25.7265625%" x2="71.109375%" y2="68.6582031%">
                                                            <stop stop-color="#FFAF73" offset="0%"></stop>
                                                            <stop stop-color="#FFFECC" offset="100%"></stop>
                                                        </lineargradient>
                                                        <clipPath id="anim-particle">
                                                            <path id="animPenta1" d="M112.5,117.236068 L110.346873,118.800407 L111.169294,121.331559 L113.830706,121.331559 L114.653127,118.800407 L112.5,117.236068 Z M113.675571,115.618034 L115.828698,117.182373 C116.529673,117.691661 116.822989,118.594395 116.55524,119.418441 L115.732819,121.949593 C115.46507,122.773639 114.697158,123.331559 113.830706,123.331559 L111.169294,123.331559 C110.302842,123.331559 109.53493,122.773639 109.267181,121.949593 L108.44476,119.418441 C108.177011,118.594395 108.470327,117.691661 109.171302,117.182373 L111.324429,115.618034 C112.025404,115.108746 112.974596,115.108746 113.675571,115.618034 Z" fill="#FFFFFF" fill-rule="nonzero"></path>
                                                            <path id="animPenta2" d="M123.201882,95.91245 L123.662979,97.3315595 L125.155119,97.3315595 L125.616216,95.91245 L124.409049,95.035392 L123.201882,95.91245 Z M126.791786,94.294416 C127.492761,94.803704 127.786077,95.7064386 127.518329,96.530484 L127.057232,97.9495935 C126.789484,98.7736388 126.021572,99.3315595 125.155119,99.3315595 L123.662979,99.3315595 C122.796526,99.3315595 122.028615,98.7736388 121.760866,97.9495935 L121.299769,96.530484 C121.032021,95.7064386 121.325337,94.803704 122.026312,94.294416 L123.233479,93.4173581 C123.934453,92.90807 124.883645,92.90807 125.58462,93.4173581 L126.791786,94.294416 Z" fill="#FFFFFF" fill-rule="nonzero"></path>
                                                            <path id="animPenta3" d="M82.0411799,86.91245 L82.5022766,88.3315595 L83.9944166,88.3315595 L84.4555133,86.91245 L83.2483466,86.035392 L82.0411799,86.91245 Z M85.6310838,85.294416 C86.3320586,85.803704 86.6253748,86.7064386 86.3576263,87.530484 L85.8965297,88.9495935 C85.6287811,89.7736388 84.8608691,90.3315595 83.9944166,90.3315595 L82.5022766,90.3315595 C81.6358241,90.3315595 80.8679121,89.7736388 80.6001635,88.9495935 L80.1390669,87.530484 C79.8713184,86.7064386 80.1646346,85.803704 80.8656094,85.294416 L82.0727761,84.4173581 C82.7737509,83.90807 83.7229423,83.90807 84.4239171,84.4173581 L85.6310838,85.294416 Z" fill="#FFFFFF" fill-rule="nonzero"></path>
                                                            <path id="animPenta4" d="M123.201882,95.91245 L123.662979,97.3315595 L125.155119,97.3315595 L125.616216,95.91245 L124.409049,95.035392 L123.201882,95.91245 Z M126.791786,94.294416 C127.492761,94.803704 127.786077,95.7064386 127.518329,96.530484 L127.057232,97.9495935 C126.789484,98.7736388 126.021572,99.3315595 125.155119,99.3315595 L123.662979,99.3315595 C122.796526,99.3315595 122.028615,98.7736388 121.760866,97.9495935 L121.299769,96.530484 C121.032021,95.7064386 121.325337,94.803704 122.026312,94.294416 L123.233479,93.4173581 C123.934453,92.90807 124.883645,92.90807 125.58462,93.4173581 L126.791786,94.294416 Z" fill="#FFFFFF" fill-rule="nonzero"></path>
                                                        </clipPath>
                                                    </defs>
                                                    <g id="Anim-Mask-Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <g id="animMask" clip-path="url(#anim-particle)">
                                                            <rect id="animRectMask" fill="url(#anim-linearGradient-1)" x="0" y="0" width="200" height="200"></rect>
                                                            <circle id="animCircleMask" fill="#FFFFFF" cx="100.5" cy="100.5" r="38.5" opacity=".7"></circle>
                                                        </g>
                                                    </g>
                                                </svg> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="service-detail text-center">
                                        <h3>API</h3>
                                        <p>Develop REST/RESTFUL API, API Integration</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4 col-6">
                                <div class="service-wrapper">
                                    <div class="service-image">
                                        <div class="service-icon">
                                            <div class="icon-object">
                                                <img src="./assets/images/services/databases-icon.png" width="100px" alt=""/>
                                            </div>
                                            <div class="icon-mask">
                                                {/* <svg width="200px" height="200px" viewBox="0 0 200 200" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                                    
                                                    <title>Photography</title>
                                                    <desc>Created with Sketch.</desc>
                                                    <defs>
                                                        <lineargradient id="photo-linearGradient-1" x1="31.6680129%" y1="26.4698709%" x2="69.6555399%" y2="69.3945556%">
                                                            <stop stop-color="#59DBB0" offset="0%"></stop>
                                                            <stop stop-color="#FEFFB5" offset="100%"></stop>
                                                        </lineargradient>
                                                        <clipPath id="photo-particle">
                                                            <path id="photoPlus1" d="M78.8,85.8 L78.8,85 C78.8,84.4477153 79.2477153,84 79.8,84 L80.2,84 C80.7522847,84 81.2,84.4477153 81.2,85 L81.2,85.8 L82,85.8 C82.5522847,85.8 83,86.2477153 83,86.8 L83,87.2 C83,87.7522847 82.5522847,88.2 82,88.2 L81.2,88.2 L81.2,89 C81.2,89.5522847 80.7522847,90 80.2,90 L79.8,90 C79.2477153,90 78.8,89.5522847 78.8,89 L78.8,88.2 L78,88.2 C77.4477153,88.2 77,87.7522847 77,87.2 L77,86.8 C77,86.2477153 77.4477153,85.8 78,85.8 L78.8,85.8 Z" fill="#FFFFFF"></path>
                                                            <path id="photoPlus2" d="M124.333333,85.6666667 L126,85.6666667 C126.552285,85.6666667 127,86.1143819 127,86.6666667 L127,87.3333333 C127,87.8856181 126.552285,88.3333333 126,88.3333333 L124.333333,88.3333333 L124.333333,90 C124.333333,90.5522847 123.885618,91 123.333333,91 L122.666667,91 C122.114382,91 121.666667,90.5522847 121.666667,90 L121.666667,88.3333333 L120,88.3333333 C119.447715,88.3333333 119,87.8856181 119,87.3333333 L119,86.6666667 C119,86.1143819 119.447715,85.6666667 120,85.6666667 L121.666667,85.6666667 L121.666667,84 C121.666667,83.4477153 122.114382,83 122.666667,83 L123.333333,83 C123.885618,83 124.333333,83.4477153 124.333333,84 L124.333333,85.6666667 Z" fill="#FFFFFF"></path>
                                                            <path id="photoPlus3" d="M107.8,122.8 L107.8,122 C107.8,121.447715 108.247715,121 108.8,121 L109.2,121 C109.752285,121 110.2,121.447715 110.2,122 L110.2,122.8 L111,122.8 C111.552285,122.8 112,123.247715 112,123.8 L112,124.2 C112,124.752285 111.552285,125.2 111,125.2 L110.2,125.2 L110.2,126 C110.2,126.552285 109.752285,127 109.2,127 L108.8,127 C108.247715,127 107.8,126.552285 107.8,126 L107.8,125.2 L107,125.2 C106.447715,125.2 106,124.752285 106,124.2 L106,123.8 C106,123.247715 106.447715,122.8 107,122.8 L107.8,122.8 Z" fill="#FFFFFF"></path>
                                                            <path id="photoPlus4" d="M78.8,85.8 L78.8,85 C78.8,84.4477153 79.2477153,84 79.8,84 L80.2,84 C80.7522847,84 81.2,84.4477153 81.2,85 L81.2,85.8 L82,85.8 C82.5522847,85.8 83,86.2477153 83,86.8 L83,87.2 C83,87.7522847 82.5522847,88.2 82,88.2 L81.2,88.2 L81.2,89 C81.2,89.5522847 80.7522847,90 80.2,90 L79.8,90 C79.2477153,90 78.8,89.5522847 78.8,89 L78.8,88.2 L78,88.2 C77.4477153,88.2 77,87.7522847 77,87.2 L77,86.8 C77,86.2477153 77.4477153,85.8 78,85.8 L78.8,85.8 Z" fill="#FFFFFF"></path>
                                                        </clipPath>
                                                    </defs>
                                                    <g id="Photo-Mask-Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <g id="photoMask" clip-path="url(#photo-particle)">
                                                            <rect id="photoRectMask" fill="url(#photo-linearGradient-1)" x="0" y="0" width="200" height="200"></rect>
                                                            <circle id="photoCircleMask" fill="#FFFFFF" cx="100.5" cy="100.5" r="38.5" opacity=".7"></circle>
                                                        </g>
                                                    </g>
                                                </svg> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="service-detail text-center">
                                        <h3>Databases</h3>
                                        <p>Relational / Non Relational DB, MongoDB, MySQL</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeServices
