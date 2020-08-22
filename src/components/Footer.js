import React from 'react';
import logo from '../assets/images/btc-logo.png';
export default function Footer() {
  return (
    <footer className="footer text-faded text-center py-4">
      <div className="container">
        <p className="m-0 ">
          © {new Date().getFullYear()}, Site crafted by
          {` `}
          <a href="https://www.builttocode.dev">
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
