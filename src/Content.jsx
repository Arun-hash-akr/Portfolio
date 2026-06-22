import React, { useState } from 'react'
import About from './About'
import Portfolio from './Portfolio'
import Resume from './Resume'
import Contact from './Contact'
import img from './assets/Images/passportsize.jpg'

const Content = () => {

    const [showContacts, setShowContacts] = useState(false);
    const [activePage, setActivePage] = useState("about");

    return (
        <>
            <div className="content">

                <div className={`side ${showContacts ? "active" : ""}`}>

                    <div className="profile">

                        <button></button>
                        <img src={img} alt="" />
                        <div className="role">
                            <h4>Arun Sankar Ram</h4>
                            <p>Frontend Developer</p>
                        </div>

                        <button className="info_more-btn" onClick={() => setShowContacts(!showContacts)}>
                            <span>Show Contacts</span>
                            <ion-icon name="chevron-down"></ion-icon>
                        </button>

                        <div className="separator"></div>
                    </div>


                    <div className={`info ${showContacts ? "show" : ""}`}>
                        
                        <div className="sidebar-info_more">

                            <ul className="contacts-list">

                                <li className="contact-item">

                                    <div className="icon-box">
                                        <ion-icon name="mail-outline"></ion-icon>
                                    </div>

                                    <div className="contact-info">
                                        <p className="contact-title">Email</p>

                                        <a href="mailto:arunsankarramakr@gmail.com" className="contact-link">arunsankarramakr@gmail.com</a>
                                    </div>

                                </li>

                                <li className="contact-item">

                                    <div className="icon-box">
                                        <ion-icon name="phone-portrait-outline"></ion-icon>
                                    </div>

                                    <div className="contact-info">
                                        <p className="contact-title">Phone</p>

                                        <a href="tel:+919047638853" className="contact-link">+91 9047638553</a>
                                    </div>

                                </li>

                                <li className="contact-item">

                                    <div className="icon-box">
                                        <ion-icon name="location-outline"></ion-icon>
                                    </div>

                                    <div className="contact-info">
                                        <p className="contact-title">Location</p>

                                        <address>Tiruchirapalli, Tamil Nadu, IN</address>
                                    </div>

                                </li>

                            </ul>

                            <div className="separator"></div>

                            <ul className="social-list">

                                <li className="social-item">
                                    <a href="#" className="social-link">
                                        <ion-icon name="logo-facebook"></ion-icon>
                                    </a>
                                </li>

                                <li className="social-item">
                                    <a href="#" className="social-link">
                                        <ion-icon name="logo-twitter"></ion-icon>
                                    </a>
                                </li>

                                <li className="social-item">
                                    <a href="#" className="social-link">
                                        <ion-icon name="logo-instagram"></ion-icon>
                                    </a>
                                </li>

                            </ul>

                        </div>
                    </div>

                </div>

                <div className="main">

                    <nav className="navbar">
                        <ul className="navbar-list">

                            <li className="navbar-item">
                                <button
                                    className={`navbar-link ${activePage === "about" ? "active" : ""
                                        }`}
                                    onClick={() => setActivePage("about")}
                                >
                                    About
                                </button>
                            </li>

                            <li className="navbar-item">
                                <button
                                    className={`navbar-link ${activePage === "resume" ? "active" : ""
                                        }`}
                                    onClick={() => setActivePage("resume")}
                                >
                                    Resume
                                </button>
                            </li>

                            <li className="navbar-item">
                                <button
                                    className={`navbar-link ${activePage === "portfolio" ? "active" : ""
                                        }`}
                                    onClick={() => setActivePage("portfolio")}
                                >
                                    Portfolio
                                </button>
                            </li>

                            <li className="navbar-item">
                                <button
                                    className={`navbar-link ${activePage === "contact" ? "active" : ""
                                        }`}
                                    onClick={() => setActivePage("contact")}
                                >
                                    Contact
                                </button>
                            </li>

                        </ul>
                    </nav>

                    {/* PAGE SWITCHING */}

                    {activePage === "about" && <About />}

                    {activePage === "resume" && <Resume />}

                    {activePage === "portfolio" && <Portfolio />}

                    {activePage === "contact" && <Contact />}

                </div>
            </div>

        </>
    )
}

export default Content