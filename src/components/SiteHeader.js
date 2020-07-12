import React from 'react';
import logo from '../assets/images/pizza-shark-logo-trans.png';

const SiteHeader = () => (
  <div className="container">
    <h1 className="site-heading text-center text-white d-block">
      <img className="logo-img img-fluid mt-5 mb-0" src={logo} alt="logo" />
      {/* <span className="site-heading-upper text-primary mtb-0">
        {config.subHeading}
      </span> */}
    </h1>
  </div>
);

export default SiteHeader;
