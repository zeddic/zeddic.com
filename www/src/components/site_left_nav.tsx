import {Link} from 'gatsby';
import React from 'react';
import {useMarkdownNotesMetadata} from '../data/static_markdown_notes_metadta';

const NAV = [
  {title: 'About me', url: '/'},
  {title: 'Projects', url: '/projects'},
  {
    title: 'Notes',
    children: [
      // Populated from query
    ],
  },
];

export function SiteLeftNav() {
  const notes = useMarkdownNotesMetadata();
  const visibleNotes = notes.filter(n => !n.hide);
  const notesSection = NAV.find(item => item.title === 'Notes');
  notesSection.children = visibleNotes;

  return (
    <nav className="nav">
      <ol className="nav-list">
        {NAV.map(item => (
          <li key={item.title}>
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
                  <li key={subitem.url}>
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
