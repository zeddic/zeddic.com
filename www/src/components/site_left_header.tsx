import React from 'react';

export function SiteLeftHeader() {
  return (
    <div className="header">
      <a className="logo" href="/">
        <img src="/assets/self.jpg" />
      </a>
      <div className="header-text">
        <p className="name">Scott Bailey</p>
        <p className="rank">Staff Software Engineer</p>
      </div>
    </div>
  );
}
