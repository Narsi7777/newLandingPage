import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.facebook.com/krishnamohan.pasumarthi.94?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
        <a href="https://x.com/Narccc03?t=a8fpWglSlKW2XSBentagXg&s=08" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
        <a href="https://www.instagram.com/_narsi.pasumarthi.___/#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
        <a href="https://www.linkedin.com/in/pasumarthi-narasimha-rao-39252b2a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
      </div>
      <div className="links">
        <a href="/about">About Us</a>
        <a href="/contact">Contact</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
      </div>
      <p>&copy; All rights reserved.</p>
    </footer>
  );
}

export default Footer;
