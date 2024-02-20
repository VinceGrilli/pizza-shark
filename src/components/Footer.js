import React from 'react';
import logo from '../assets/images/btc-logo.png';
export default function Footer() {
  return (
    <footer className="footer text-white text-faded text-center py-4">
      <div className="container">
        <p className="m-0 ">
          © Copyright {new Date().getFullYear()} All rights reserved. Website
          crafted by
          {` `}
          <a href="https://builttocode.dev">
            <img
              style={{
                maxWidth: `7rem`,
              }}
              src={logo}
              alt="Built to Code"
            />
          </a>
        </p>
      </div>
    </footer>
  );
}
