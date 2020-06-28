import React from 'react';

export function SiteLeftNav() {
  return (
    <nav className="Nav">
      <ol className="nav-list">
        <li className="active">
          <a href="{{item.url}}">blah</a>
          <ol className="sub-nav-list">
            <li className="{% if subitem.url == page.url %}active{% endif %}">
              <a href="{{subitem.url}}">subtitle</a>
            </li>
          </ol>
        </li>
      </ol>
    </nav>
  );
}
