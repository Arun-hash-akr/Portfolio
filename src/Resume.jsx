import React from 'react'

const Resume = () => {

  const skills = [
    { name: "Web Design", percentage: 80 },
    { name: "Excel", percentage: 70 },
    { name: "Word", percentage: 90 },
    { name: "WordPress", percentage: 50 },
  ];


  return (
    <>
      <div className="resume">
        <header>
          <h2 class="h2 article-title">Resume</h2>
        </header>

        <section class="timeline">

          <div class="title-wrapper">
            <div class="icon-box">
              <ion-icon name="book-outline"></ion-icon>
            </div>

            <h3 class="h3">Education</h3>
          </div>

          <ol class="timeline-list">

            <li class="timeline-item">

              <h4 class="h4 timeline-item-title">Bishop Heber College</h4>

              <span>2023 — 2025</span>

              <p class="timeline-text">
                Master of Science in Computer Science | 75%.
              </p>

            </li>

            <li class="timeline-item">

              <h4 class="h4 timeline-item-title">Bishop Heber College</h4>

              <span>2020 — 2023</span>

              <p class="timeline-text">
                Bachelor of Computer Applications | 70%.
              </p>

            </li>

            <li class="timeline-item">

              <h4 class="h4 timeline-item-title">Holy Cross Matric Hr Sec School</h4>

              <span>2020 — 20219</span>

              <p class="timeline-text">
                Computer & Maths |55%.
              </p>

            </li>

          </ol>

        </section>

        {/* <section class="timeline">

          <div class="title-wrapper">
            <div class="icon-box">
              <ion-icon name="book-outline"></ion-icon>
            </div>

            <h3 class="h3">Experience</h3>
          </div>

          <ol class="timeline-list">

            <li class="timeline-item">

              <h4 class="h4 timeline-item-title">Creative director</h4>

              <span>2015 — Present</span>

              <p class="timeline-text">
                Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas
                molestias
                exceptur.
              </p>

            </li>

            <li class="timeline-item">

              <h4 class="h4 timeline-item-title">Art director</h4>

              <span>2013 — 2015</span>

              <p class="timeline-text">
                Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et
                quas molestias
                exceptur.
              </p>

            </li>

            <li class="timeline-item">

              <h4 class="h4 timeline-item-title">Web designer</h4>

              <span>2010 — 2013</span>

              <p class="timeline-text">
                Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et
                quas molestias
                exceptur.
              </p>

            </li>

          </ol>

        </section> */}

        <section class="skill">

          <h3 class="h3 skills-title">My skills</h3>

          <ul class="skills-list content-card">

            {skills.map((skill, index) => (
              <li className="skills-item" key={index}>

                <div className="title-wrapper">
                  <h5 className="h5">{skill.name}</h5>
                  <data value={skill.percentage}>
                    {skill.percentage}%
                  </data>
                </div>

                <div className="skill-progress-bg">
                  <div
                    className="skill-progress-fill"
                    style={{
                      width: `${skill.percentage}%`
                    }}
                  ></div>
                </div>

              </li>
            ))}

            {/* <li class="skills-item">

              <div class="title-wrapper">
                <h5 class="h5">Web design</h5>
                <data value="90">80%</data>
              </div>

              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: "50%" }}
                ></div>
              </div> */}

            {/* <div class="skill-progress-bg">
                <div class="skill-progress-fill" style="width: 80%;"></div>
              </div> */}

            {/* </li>

            <li class="skills-item">

              <div class="title-wrapper">
                <h5 class="h5">Excel</h5>
                <data value="70">70%</data>
              </div>

              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: "50%" }}
                ></div>
              </div> */}

            {/* <div class="skill-progress-bg">
                <div class="skill-progress-fill" style="width: 70%;"></div>
              </div> */}

            {/* </li>

            <li class="skills-item">

              <div class="title-wrapper">
                <h5 class="h5">Word</h5>
                <data value="90">90%</data>
              </div>

              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: "50%" }}
                ></div>
              </div>

            </li>

            <li class="skills-item">

              <div class="title-wrapper">
                <h5 class="h5">WordPress</h5>
                <data value="50">50%</data>
              </div>

              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: "50%" }}
                ></div>
              </div>

            </li> */}

          </ul>

        </section>
      </div>
    </>
  )
}

export default Resume