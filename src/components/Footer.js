import React from 'react';

export default function Footer() {
  return (
    <footer className="footer text-faded text-center py-4">
      <div className="container">
        <p className="m-0 small">
          © Copyright {new Date().getFullYear()} All rights reserved. Website
          crafted by{' '}
          <a className="text-warning" href="https://vincegrilli.dev/">
            Vince Grilli
          </a>
        </p>
      </div>
    </footer>
  );
}
