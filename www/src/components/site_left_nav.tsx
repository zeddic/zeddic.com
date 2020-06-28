import React from 'react';
import {Link, useStaticQuery, graphql} from 'gatsby';

const SITE_NAV_QUERY = graphql`
  {
    site {
      siteMetadata {
        nav {
          title
          url
          children {
            title
            url
          }
        }
      }
    }
  }
`;

export function SiteLeftNav() {
  const data = useStaticQuery(SITE_NAV_QUERY);
  const navItems = data.site.siteMetadata.nav;

  return (
    <nav className="nav">
      <ol className="nav-list">
        {navItems.map(item => (
          <li>
            {!!item.url ? (
              <Link to={item.url} activeClassName="active">
                {item.title}
              </Link>
            ) : (
              <h2>{item.title}</h2>
            )}

            {!!item.children && (
              <ol className="sub-nav-list">
                {item.children.map(subitem => (
                  <li>
                    <Link to={subitem.url} activeClassName="active">
                      {subitem.title}
                    </Link>
                  </li>
                ))}
              </ol>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
