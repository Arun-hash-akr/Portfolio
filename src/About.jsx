import React from 'react'
import img from './assets/Images/passportsize.jpg'

const About = () => {
    return (
        <>
            <div className="about">
                <header>
                    <h2 class="h2 article-title">About me</h2>
                </header>

                <section class="about-text">
                    <p>
                    I'm a Frontend Developer and Web Designer from Tamil Nadu, working with HTML, CSS, JavaScript, and React JS. I enjoy turning creative ideas into responsive, attractive, and user-friendly websites.
                    </p>

                    <p>
                   My goal is to build websites that are functional, responsive, and easy to use while keeping them visually appealing. Moreover, I enjoy learning new technologies, improving my frontend development skills, and creating clean web designs. My aim is to deliver modern websites that provide a great user experience and reflect creativity. I have created several personal and academic web projects to improve my skills as a frontend developer. goal is to build websites that are functional, responsive, and easy to use while keeping them visually appealing. Moreover, I enjoy learning new technologies, improving my frontend development skills, and creating clean web designs. My aim is to deliver modern websites that provide a great user experience and reflect creativity. I have created several personal and academic web projects to improve my skills as a frontend developer.
                    </p>
                </section>

                <section class="service">

                    <h3 class="h3 service-title">What i'm doing</h3>

                    <ul class="service-list">

                        <div className="service1">
                            <li class="service-item">

                                <div class="service-icon-box">
                                    {/* <img src="./assets/images/icon-design.svg" alt="design icon" width="40"> */}
                                </div>

                                <div class="service-content-box">
                                    <h4 class="h4 service-item-title">Web design</h4>

                                    <p class="service-item-text">
                                        The most modern and high-quality design made at a professional level.
                                    </p>
                                </div>

                            </li>

                            <li class="service-item">

                                <div class="service-icon-box">
                                    {/* <img src="./assets/images/icon-dev.svg" alt="Web development icon" width="40"> */}
                                </div>

                                <div class="service-content-box">
                                    <h4 class="h4 service-item-title">Web development</h4>

                                    <p class="service-item-text">
                                        High-quality development of sites at the professional level.
                                    </p>
                                </div>

                            </li>
                        </div>

                        <div className="service2">
                            <li class="service-item">

                                <div class="service-icon-box">
                                    {/* <img src="./assets/images/icon-app.svg" alt="mobile app icon" width="40"> */}
                                </div>

                                <div class="service-content-box">
                                    <h4 class="h4 service-item-title">Mobile apps</h4>

                                    <p class="service-item-text">
                                        Professional development of applications for iOS and Android.
                                    </p>
                                </div>

                            </li>

                            <li class="service-item">

                                <div class="service-icon-box">
                                    {/* <img src={img} alt="" /> */}
                                </div>

                                <div class="service-content-box">
                                    <h4 class="h4 service-item-title">Photography</h4>

                                    <p class="service-item-text">
                                        I make high-quality photos of any category at a professional level.
                                    </p>
                                </div>

                            </li>
                        </div>

                    </ul>

                </section>
            </div>

        </>
    )
}

export default About
