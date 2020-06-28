import React from 'react';
import './layout.scss';
import {SiteLeftHeader} from './site_left_header';
import {SiteLeftNav} from './site_left_nav';

export function Layout({children}) {
  return (
    <>
      <section className="sidebar">
        <SiteLeftHeader></SiteLeftHeader>
        <SiteLeftNav></SiteLeftNav>
        <div className="footer">Copyright Scott Bailey, {new Date().getFullYear()}</div>
      </section>

      <section className="content">
        <div className="content-inner">{children}</div>
      </section>
    </>
  );
}
