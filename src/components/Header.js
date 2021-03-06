import React, { Component } from 'react';
import { Link } from 'gatsby';
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
    };
  }
  toggleMenu = value => {
    this.setState({ openMenu: value });
  };

  render() {
    const { openMenu } = this.state;
    const { activeLink } = this.props;
    return (
      <nav
        className="navbar fixed-top navbar-expand-lg navbar-dark py-lg-2"
        id="mainNav"
      >
        <div className="container">
          <a
            className="navbar-brand text-uppercase text-expanded font-weight-bold "
            href="https://www.toasttab.com/pizza-shark-403-pleasant-lake-ave"
          >
            Order Online
          </a>

          <button
            onClick={_ => this.toggleMenu(!openMenu)}
            className={`navbar-toggler  ${openMenu ? '' : 'collapsed'}`}
            type="button"
            aria-controls="navbarResponsive"
            aria-expanded={openMenu}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${openMenu ? 'show' : ''}`}
            id="navbarResponsive"
          >
            <ul className="navbar-nav text-center ml-auto">
              <li
                className={`nav-item px-lg-3 ${
                  activeLink === 'home' ? 'active' : ''
                }`}
              >
                <Link className="nav-link text-uppercase text-expanded" to="/">
                  Home
                </Link>
              </li>
              <li
                className={`nav-item px-lg-2 ${
                  activeLink === 'store' ? 'active' : ''
                }`}
              >
                <Link
                  className="nav-link text-uppercase text-expanded"
                  to="/store"
                >
                  Hours & Location
                </Link>
              </li>
              <li
                className={`nav-item px-lg-3 ${
                  activeLink === 'menu' ? 'active' : ''
                }`}
              >
                <Link
                  className="nav-link text-uppercase text-expanded"
                  to="https://www.toasttab.com/pizza-shark-403-pleasant-lake-ave"
                >
                  Menu
                </Link>
              </li>
              {/* <li
                className={`nav-item px-lg-3 ${
                  activeLink === 'about' ? 'active' : ''
                }`}
              >
                <Link
                  className="nav-link text-uppercase text-expanded"
                  to="/about"
                >
                  About
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
