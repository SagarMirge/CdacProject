import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarWrapper = styled.nav`
  background-color: #000000; /* Dark black background color */
  .navbar-brand {
    color: #f8f9fa; /* Off-white text color */
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  .navbar-nav .nav-link {
    color: #f8f9fa; /* Off-white text color */
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Navbar = () => {
  return (
    <NavbarWrapper className="navbar navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Dafodils Security System/Logo</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Dashboard</h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/features">Features</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entry">Dafodils Portal/ Visitor Access</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Login
                </Link>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li><Link className="dropdown-item" to="/visitor_login">Visitor Login</Link></li>
                  <li><Link className="dropdown-item" to="/society_member_login">Society Member Login</Link></li>
                  <li><Link className="dropdown-item" to="/watchman_login">Watchman Login</Link></li>
                  {/* <li><hr className="dropdown-divider"></hr></li>
                  <li><Link className="dropdown-item" to="#">Something else here</Link></li> */}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
