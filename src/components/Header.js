import React from 'react';
import Modal from "react-bootstrap/Modal"
import { Link } from 'gatsby';
import { useState } from 'react';
import fbicon from '../assets/images/Facebook.svg'
import instaicon from '../assets/images/Instagram.svg'
import plgs from '../assets/images/plgs5.jpg'
import orpheum from '../assets/images/orpheum.jpg'

const Header = () => {
  
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('Home')
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };
  const hideModal = () => {
    setIsOpen(false);
  };
  
    return (
      <nav
        className="navbar fixed-top navbar-expand-lg navbar-dark py-lg-2"
        id="mainNav"
      >
        <div className="col-10 col-sm-auto text-left flex-sm-row">
        
          <button className="btn btn-link navbar-brand text-uppercase sm-text-left font-weight-bold " onClick={showModal}>Order Online</button>
          <Modal show={isOpen} size="lg" onHide={hideModal}>
            <Modal.Header>
              <Modal.Title>Choose Location</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="col-sm-auto text-center">
                <a
                  type="button"
                  className="btn btn-link navbar-brand text-uppercase sm-text-left font-weight-bold "
                  href="https://www.toasttab.com/pizza-shark-403-pleasant-lake-ave"
                >
                  Order Harwich
                </a>
                <img
                className="img-fluid rounded about-heading-img w-75"
                src={plgs}
                alt="Outside the pleasant lake general store"
                />
                <a
                  type="button"
                  className={`btn btn-link navbar-brand text-uppercase font-weight-bold `}
                  href="https://www.toasttab.com/pizza-shark-chatham-637-main-street"
                >
                  Order Chatham
                </a>
                <img
                className="img-fluid rounded about-heading-img w-75"
                src={orpheum}
                alt="The Historic Chatham Orpheum"
                />
              </div>
            </Modal.Body>
          </Modal>
        </div>
        <div className="col-2 col-sm-auto ">
          <button
            onClick={() => {setMenuOpen(!menuOpen)}}
            className={`navbar-toggler justify-content-end  ${menuOpen ? '' : 'collapsed'}`}
            type="button"
            aria-controls="navbarResponsive"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div
          className={`collapse navbar-collapse  ${menuOpen ? 'show' : ''}`}
          id="navbarResponsive"
        >
          <ul className="navbar-nav text-center mx-auto ">
            <li
              className={`nav-item px-lg-3 ${
                activeLink === 'Home' ? '' : setActiveLink('Home')
              }`}
            >
              <Link className={`nav-link text-uppercase text-expanded ${menuOpen ? 'pt-3' : ''}`} to="/">
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
                to="/hours"
              >
                Hours
              </Link>
            </li>
          </ul>
          <div className="navbar-end mx-2 text-center">
            
              <a href="https://www.facebook.com/PleasantLakePizza" title="facebook" className=" rounded-full inline-block transition-shadow duration-300 hover:shadow-2xl">
                <img src={fbicon} alt="facebook" className="social-item"/>
              </a>
            
            
              <a href="https://www.instagram.com/pizzasharkcc/" title="instagram" className="mr-2 rounded-full inline-block transition-shadow duration-300 hover:shadow-2xl">
                <img src={instaicon} alt="instagram" className="social-item"/>
              </a>
            
          </div>
        </div>
    </nav>
  );
}

export default Header
