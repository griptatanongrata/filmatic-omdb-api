import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer__row">
        <a href="/" className="footer__anchor">
          <span className="footer__logo--popper">
            Top
            <i className="fas fa-arrow-up"></i>
          </span>
        </a>
        <div className="footer__social--list">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social--link link__hover-effect link__hover-effect--white"
          >
            Github
          </a>
          <a
            href="https://linkedin.com"
            target="/"
            className="footer__social--link link__hover-effect link__hover-effect--white"
          >
            LinkedIn
          </a>
          <a
            href="mailto:j.ttipton@yahoo.com"
            className="footer__social--link link__hover-effect link__hover-effect--white"
          >
            Email
          </a>
          <a
            href="/"
            className="footer__social--link link__hover-effect link__hover-effect--white"
          >
            Resume
          </a>
        </div>
        <div className="footer__copyright">Copyright © 2026 Justin Tipton</div>
      </div>
    </footer>
  );
};

export default Footer;
