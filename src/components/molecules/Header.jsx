import React, { useEffect } from 'react';
import { Link } from 'react-router';
import { useAppState } from 'appState';
import Icon from 'icons';
import Paths from 'paths';

const Header = () => {
  const { setHeaderReady, CurrentPath } = useAppState();

  const Links = [
    {
      path: Paths.PARENTS,
      name: <span>PARENTS</span>,
      icon: 'supervisor_account',
    },
    {
      path: Paths.TUTORS,
      name: <span>TUTORS</span>,
      icon: 'interactive_space',
    },
    {
      path: Paths.SCHOOLS_AND_LOCAL_AUTORITIES,
      name: (
        <>
          <span>SCHOOLS</span>
          <span className="mobile-hidden">& Local Authorities</span>
        </>
      ),
      icon: 'school',
    },
    { path: Paths.ABOUT, name: <span>ABOUT US</span>, icon: 'diversity_1' },
    { path: Paths.CONTACT, name: <span>CONTACT</span>, icon: 'emoji_people' },
  ];

  useEffect(() => {
    setHeaderReady(true);
  }, []);

  return (
    <header>
      <nav>
        <div className="logo">
          <Link to={Paths.HOME}>
            <img
              alt="GoWise Learning logo"
              src="/media/gowise-learning-logo.webp"
              width="242"
              height="60"
            />
          </Link>
        </div>

        <ul>
          {Links.map((link) => (
            <li key={link.path}>
              <Link
                to={`${Paths.HOME}${link.path}`}
                className={CurrentPath === link.path ? 'current' : null}
                aria-label={CurrentPath === link.path ? `${link.name}, current section` : null}
              >
                <Icon className="desktop-hidden-large">{link.icon}</Icon>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
