import React, { useState } from 'react'

const Cont = () => {

    const [showContacts, setShowContacts] = useState(false);


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

                                        <a href="mailto:arunsankarramakr@gmail.com" className="contact-link">richard@example.com</a>
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
                    <h3>main</h3>
                </div>

            </div>
        </>
    )
}

export default Cont