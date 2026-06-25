import React from 'react'
import sst from './assets/Images/sst1.png'
import event from './assets/Images/event1.png'

const Portfolio = () => {
  return (
    <>

      <div className="port">
        <header>
          <h2 class="h2 article-title">Portfolio</h2>
        </header>

        <ul class="project-list">

          <li class="project-item">
            <a href="#">

              <figure class="project-img">
                <div class="project-item-icon-box">
                  <ion-icon name="eye-outline" href='https://ssttravels.netlify.app/'></ion-icon>
                </div>

                <img src={sst} alt="" />
              </figure>

              <h3 class="project-title">Travel Management</h3>

              <p class="project-category">Web development</p>

            </a>
          </li>

          <li class="project-item">
            <a href="#">

              <figure class="project-img">
                <div class="project-item-icon-box">
                  <ion-icon name="eye-outline" href='https://bootfes2k25.netlify.app/'></ion-icon>
                </div>

                <img src={event} alt="" />
              </figure>

              <h3 class="project-title">Event Management</h3>

              <p class="project-category">Web design</p>

            </a>
          </li>


        </ul>
      </div>

    </>
  )
}

export default Portfolio