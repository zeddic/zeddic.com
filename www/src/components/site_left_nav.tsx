import {Link} from 'gatsby';
import React, {useState} from 'react';
import {useMarkdownNotesMetadata} from '../data/static_markdown_notes_metadta';

// @ts-ignore
import MenuIcon from '../../static/assets/icons/menu.svg';

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

  const [opened, setOpened] = useState(false);

  function onMobileNavClick() {
    setOpened(!opened);
  }

  return (
    <>
      <div className="nav-mobile-button">
        <button
          className="nav-mobile-button"
          onClick={onMobileNavClick}
          aria-label="Toggle left nav"
        >
          <MenuIcon />
        </button>
      </div>
      <nav className={`nav ${opened ? 'opened' : ''}`}>
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
    </>
  );
}
