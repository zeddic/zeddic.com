import React from 'react';
import {Layout} from '../components/layout';
import './index.scss';

// @ts-ignore
import LinkedInLogo from '../../static/assets/icons/linkedin.svg';
// @ts-ignore
import MailLogo from '../../static/assets/icons/gmail.svg';
// @ts-ignore
import GithubLogo from '../../static/assets/icons/github.svg';

export default function AboutMe() {
  return (
    <Layout>
      <article className="post about-me">
        <header className="post-header">
          <h1>Scott Bailey</h1>
        </header>
        <div className="post-content">
          <div className="title">Staff Software Engineer at Google</div>
          <div className="email"></div>
          <div className="about-quick-links">
            <a href="mailto:scott@zeddic.com">
              <MailLogo />
              scott@zeddic.com
            </a>
            <a
              href="https://www.linkedin.com/in/scott-bailey-z/"
              target="_blank"
            >
              <LinkedInLogo />
              LinkedIn
            </a>

            <a href="https://github.com/zeddic" target="_blank">
              <GithubLogo />
              GitHub
            </a>
          </div>

          <section className="about-me-section">
            <header>
              <h2>About me</h2>
            </header>
            I’m a software engineer with 14 years of experience. I work across
            stack with a particular passion for the frontend space. I'm
            currently working at Google on their internal business intelligence
            platform. Prior, I've worked on Analytics, Adwords, and at Canon's
            American R&D branch.
          </section>

          <section className="work-experience-section">
            <header>
              <h2>Work experience</h2>
            </header>
            <section className="job">
              <header className="job-title">
                Google Internal Business Intelligence Suite
              </header>
              <div className="job-subtitle">
                <div className="rank">Staff Software Engineer</div>
                <div className="years">2016-Present</div>
              </div>
              <div className="job-description">
                <ul>
                  <li>
                    Currently tech lead / manager of a team of 4 engineers
                    responsible for multiple frontend products in the suite
                  </li>
                  <li>
                    Conduct career planning, product planning, and task
                    priotization
                  </li>
                  <li>
                    Built a frontend application for editing and monitoring ETL
                    data pipelines using a rich graph based editor
                    <ul>
                      <li>
                        Product responsible for XXX,000 internal pipelines
                      </li>
                      <li>
                        Increased frontend usage by 55% over a 1 year period
                      </li>
                    </ul>
                  </li>
                  <li>
                    Worked cross-site to build and release a pipeline monitoring
                    frontend for another team in Zurich
                  </li>
                  <li>
                    Created common frontend infrastructure used across the suite
                  </li>
                </ul>
              </div>
            </section>

            <section className="job">
              <header className="job-title">Google Analytics</header>
              <div className="job-subtitle">
                <div className="rank">Senior Software Engineer</div>
                <div className="years">2012-2016</div>
              </div>
              <div className="job-description">
                <ul>
                  <li>
                    Designed and launched project to migrate Analytics frontend
                    to new serving stack include Angular
                    <ul>
                      <li>
                        Lead team of 4, later coordinating work of 11 engineers
                        at peak of migration
                      </li>
                      <li>
                        Conducted design, security, privacy, and legal reviews
                      </li>
                      <li>
                        Designed process that allowed for incremental migration
                      </li>
                    </ul>
                  </li>
                  <li>
                    Lead a team of 3 to develop a common, accessible, frontend
                    component library
                  </li>
                  <li>
                    Lead a team of 3 to develop Analytics 360 Suite user
                    management features
                  </li>
                  <li>
                    Developed multiple features within the Analytics management
                    UI
                  </li>
                </ul>
              </div>
            </section>

            <section className="job">
              <header className="job-title">Google AdWords Keyword Tool</header>
              <div className="job-subtitle">
                <div className="rank">Software Engineer</div>
                <div className="years">2008-2012</div>
              </div>
              <div className="job-description">
                <li>
                  Helped develop and release a new version of the Keyword Tool
                </li>
                <li>
                  Developed multiple features including user preferences,
                  improved search, and improved table performance
                </li>
                <li>
                  Developed suite a webdriver tests for automated frontend
                  testing
                </li>
                <li>Member of production on call rotation</li>
                <li>Prepared training material and taught classes on GWT</li>
              </div>
            </section>

            <section className="job">
              <header className="job-title">Canon Development Americas</header>
              <div className="job-subtitle">
                <div className="rank">Software Engineer</div>
                <div className="years">2006-2008</div>
              </div>
              <div className="job-description">
                <li>
                  Conducted research and development to create new technologies
                  for future Canon products
                </li>
                <li>
                  Helped develop early versions of Canon’s support for Web
                  Services on Devices
                </li>

                <li>
                  Developed exploratory software and a smart remote for a
                  potential brand of Canon TVs
                </li>
                <li>
                  Traveled to Canon Headquarters in Tokyo to showcase division’s
                  latest work
                </li>
                <li>Published 2 patents</li>
              </div>
            </section>
          </section>

          <section className="education-section">
            <header>
              <h2>Education</h2>
            </header>
            <div className="school">
              <div className="school-title">
                University of Soutern California
              </div>
              <div className="school-degree">
                Masters in Business Administration
              </div>
            </div>
            <div className="school">
              <div className="school-title">
                University of California, Irvine
              </div>
              <div className="school-degree">Bachelors in Computer Science</div>
            </div>
          </section>
        </div>
      </article>
    </Layout>
  );
}
