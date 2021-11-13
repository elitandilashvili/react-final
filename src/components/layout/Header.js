import { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import * as route from '../../contacts/routs';
import { useAuthContext } from '../../Provider/AuthProvider/AuthProvider';

export function Header() {
  const { loggedIn, logOut } = useAuthContext();

  useEffect(() => {
    console.log('HEADER RENDERING');
  }, [loggedIn]);

  const renderGuestLinks = () => {
    return (
      <div className="buttons">
        <NavLink
          className="button is-grey-darker button is-small button is-hovered login-button log-text button-box"
          to={route.LOGIN_PATH}
        >
          Log in
        </NavLink>
      </div>
    );
  };

  const renderUserLinks = () => {
    return (
      <div className="buttons">
        <button
          className="button is-grey-darker button is-small button is-hovered login-button  button-box "
          onClick={logOut}
        >
          <strong>Log Out</strong>
        </button>
      </div>
    );
  };

  return (
    <nav
      id="navbar"
      className="navbar box"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link className="navbar-item" to={route.HOME_PATH}></Link>

        <Link
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          to={route.HOME_PATH}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </Link>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start ">
          <NavLink
            className="navbar-item nav-text"
            to={route.HOME_PATH}
            activeClassName=""
          >
            Home
          </NavLink>

          <NavLink
            className="navbar-item nav-text "
            to={route.DOCUMENTATION_PATH}
          >
            Main Page
          </NavLink>

          <div className="navbar-item has-dropdown is-hoverable"></div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            {loggedIn ? renderUserLinks() : renderGuestLinks()}
          </div>
        </div>
      </div>
    </nav>
  );
}
