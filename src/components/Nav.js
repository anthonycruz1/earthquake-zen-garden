import React from 'react';
import { Link } from 'react-router-dom';
import DataContext from '../contexts/DataContext';

// Renders Nav component, which includes site logo, site title, and a <Link/> to '/profile'. Logo is <Link/> to '/'.
function Nav() {
  return (
    <DataContext.Consumer>
      {(data) => {
        return (
          <nav className="navBar">
            <Link to="/">
              <img
                data-testid="navBar__logo-test"
                className="navBar__logo"
                src={data.site.logoImage}
                alt="site logo: a lowercase r against the white silhouette of a home"
              />
            </Link>
            <h1 className="nav__title title">{data.site.title}</h1>
            <Link to="/profile">
              <span className="nav__profile">{`Welcome ${data.profile.firstName}`}</span>
            </Link>
          </nav>
        );
      }}
    </DataContext.Consumer>
  );
}

export default Nav;
