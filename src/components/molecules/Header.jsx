import React, { useEffect } from "react";
import { Link } from "react-router";
import { useAppState } from "appState";
import Icon from "icons";
import Paths from "paths";

const Header = () => {
  const { setHeaderReady, CurrentPath } = useAppState();

  const Links = [
    { path: Paths.PARENTS, name: "PARENTS", icon: "account_circle" },
    { path: Paths.TUTORS, name: "TUTORS", icon: "account_circle" },
    {
      path: Paths.SCHOOLS_AND_LOCAL_AUTORITIES,
      name: "SCHOOLS & LAs",
      icon: "account_circle",
    },
    { path: Paths.ABOUT, name: "ABOUT US", icon: "account_circle" },
    { path: Paths.CONTACT, name: "CONTACT", icon: "account_circle" },
  ];

  useEffect(() => {
    setHeaderReady(true);
  }, []);

  return (
    <header>
      <nav>
        <div className="logo">
          <Link to={Paths.HOME}>
            <img alt="GoWise logo" src="/media/GoWise-logo.svg" />
          </Link>
        </div>

        <ul>
          {Links.map((link) => (
            <li key={link.name}>
              <Link
                to={`${Paths.HOME}${link.path}`}
                className={CurrentPath === link.path ? "current" : null}
                aria-label={
                  CurrentPath === link.path
                    ? `${link.name}, current section`
                    : null
                }
              >
                <Icon className="desktop-hidden">{link.icon}</Icon>
                <span>{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
