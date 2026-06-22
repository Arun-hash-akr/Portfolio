import React from 'react'

const Contact = () => {
  return (
    <>
      <div className="contact">

        <header>
          <h2 className="h2 article-title">Contact</h2>
        </header>

        <section className="mapbox">
          <figure>
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125406.0387557108!2d78.6066255699808!3d10.816002350004695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf50ff2aecdad%3A0x6de02c3bedbbaea6!2sTiruchirappalli%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1782141513710!5m2!1sen!2sin"
              width="400"
              height="300"
              loading="lazy"
              title="Google Map"
            ></iframe>
          </figure>
        </section>

        <section className="contact-form">

          <h3 className="h3 form-title">Contact Form</h3>

          <form className="form">

            <div className="input-wrapper">
              <input
                type="text"
                name="fullname"
                className="form-input"
                placeholder="Full name"
                required
              />

              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="Email address"
                required
              />
            </div>

            <textarea
              name="message"
              className="form-input"
              placeholder="Your Message"
              required
            ></textarea>

            <button className="form-btn" type="submit">
              <ion-icon name="paper-plane"></ion-icon>
              <span>Send Message</span>
            </button>

          </form>

        </section>

      </div>
    </>
  )
}

export default Contact