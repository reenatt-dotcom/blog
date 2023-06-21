import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</p>
        <div className="social-icons">
          <a href="#" className="icon">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="icon">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="icon">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
