import React from 'react';
import './layout.scss';
import {SiteLeftHeader} from './site_left_header';
import {SiteLeftNav} from './site_left_nav';

export function Layout({children}) {
  return (
    <div className="site">
      <section className="sidebar">
        <SiteLeftHeader></SiteLeftHeader>
        <SiteLeftNav></SiteLeftNav>
      </section>

      <section className="content">
        {children}
        <div className="footer">
          Copyright Scott Bailey, {new Date().getFullYear()}
        </div>
      </section>
    </div>
  );
}
