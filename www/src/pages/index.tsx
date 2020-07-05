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
            I’m a software engineer with 14 years experience. I work across
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
              <div className="job-description"></div>
            </section>

            <section className="job">
              <header className="job-title">Google Analytics</header>
              <div className="job-subtitle">
                <div className="rank">Senior Software Engineer</div>
                <div className="years">2012-2016</div>
              </div>
              <div className="job-description"></div>
            </section>

            <section className="job">
              <header className="job-title">Google AdWords</header>
              <div className="job-subtitle">
                <div className="rank">Software Engineer</div>
                <div className="years">2008-2012</div>
              </div>
              <div className="job-description"></div>
            </section>

            <section className="job">
              <header className="job-title">Canon Development Americas</header>
              <div className="job-subtitle">
                <div className="rank">Software Engineer</div>
                <div className="years">2006-2008</div>
              </div>
              <div className="job-description"></div>
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
