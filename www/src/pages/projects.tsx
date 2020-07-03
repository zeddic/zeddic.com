import React from 'react';
import {Layout} from '../components/layout';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import './projects.scss';

export default function Projects() {
  return (
    <Layout>
      <article className="post">
        <header className="post-header">
          <h1>Projects</h1>
        </header>
        <div className="post-content">
          <h2>Personal</h2>
          <h3>WebDKP</h3>
          <a href="https://webdkp.com">WebDKP</a> is a free web service I
          created for players of the game World of Warcraft. At its height, it
          had over 500,000 active users. The site keeps track of user
          information called “DKP”, which can often be very difficult to handle
          manually. The site can often reduce tasks that used to take hours into
          a matter of minutes. It is integrated with World of Warcraft by means
          on an addon that users can download.
          <div className="project-photos">
            <ZoomableThumbnail src="/assets/projects/webdkp/table.jpg"></ZoomableThumbnail>
            <ZoomableThumbnail src="/assets/projects/webdkp/addon.jpg"></ZoomableThumbnail>
            <ZoomableThumbnail src="/assets/projects/webdkp/addon2.jpg"></ZoomableThumbnail>
            <ZoomableThumbnail src="/assets/projects/webdkp/control.jpg"></ZoomableThumbnail>
            <ZoomableThumbnail src="/assets/projects/webdkp/manage.jpg"></ZoomableThumbnail>
          </div>
          <h3>Introduction to 2D Game Development</h3>
          <p>
            I gave a TechTalk covering the{' '}
            <a href="https://docs.google.com/presentation/d/1uWUhfYk0tSrvmtmXOIMquOXGEh_2DREu1lqFEiIQ7rc/edit?usp=sharing">
              basics of building 2D video games
            </a>
            . While most of the concepts are generic, code examples centered on
            building games in the browser.
          </p>
          <iframe
            className="google-slides-iframe"
            frameBorder="0"
            src="https://docs.google.com/presentation/d/e/2PACX-1vRi8FVMonMEAuZZP0TIOOZVHjXnrxyU-KOiQmYSeMWc8KKaSPoVHz3ZKh6uOVi21oiwvPpuMY13Wx1g/embed?start=false&loop=false&delayms=60000"
            width="100%"
            height="410"
            allowFullScreen
          ></iframe>
        </div>
      </article>
    </Layout>
  );
}

function ZoomableThumbnail(props) {
  return (
    <div className="thumbnail-wrapper">
      <Zoom overlayBgColorEnd="rgba(0,0,0,.8)" zoomMargin={40}>
        <img src={props.src} className="thumbnail" />
      </Zoom>
    </div>
  );
}
