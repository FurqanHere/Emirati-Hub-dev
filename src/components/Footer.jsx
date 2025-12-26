import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";
import footerLeftAngle from "../assets/images/fooyer-left-angle.png";
import footerRightAngle from "../assets/images/footer-right-angle.png";
import phoneImg from "../assets/images/phone-img.png";
import emailImg from "../assets/images/email.png";

const Footer = () => {
  const location = useLocation();

  // Function to handle navigation to homepage sections
  const handleSectionNavigation = (sectionId) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <div 
      className="footer footer-main-container"
      style={{
        '--footer-left-angle': `url(${footerLeftAngle})`,
        '--footer-right-angle': `url(${footerRightAngle})`
      }}
    >
      <div className="container py-5">
        {/* Logo and Company Name */}
        <div className="text-center mb-4">
          <div className="d-flex align-items-center justify-content-center gap-3 mb-3" data-aos="fade-up" data-aos-delay="100">
            <img src={logo} alt="EMIRATI HUB" className="footer-logo" />
          </div>
          
          {/* Main Text Block */}
          <p className="footer-main-text" data-aos="fade-up" data-aos-delay="200">
            Sed ut perspiatis unde omnis iste natus error voluptatem accusant um doloremque
            <br />
            site headricks laudan lipsum dummy text provider.
          </p>

          {/* Navigation Links */}
          <nav className="footer-nav-links" data-aos="fade-up" data-aos-delay="300">
            <button 
              className="footer-nav-link-btn"
              onClick={() => handleSectionNavigation('home')}
            >
              Home
            </button>
            <button 
              className="footer-nav-link-btn"
              onClick={() => handleSectionNavigation('aboutus')}
            >
              About
            </button>
            <button 
              className="footer-nav-link-btn"
              onClick={() => handleSectionNavigation('screenshot')}
            >
              Screenshots
            </button>
            <button 
              className="footer-nav-link-btn"
              onClick={() => handleSectionNavigation('downloadApp')}
            >
              Download App
            </button>
          </nav>
        </div>
      </div>

      {/* Footer Bottom Bar with Copyright and Contact */}
      <div className="footer-bottom-bar">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8 col-12 mb-3 mb-md-0" data-aos="fade-up" data-aos-delay="400">
              <p className="footer-copyright-text mb-0">
                © Copyright 2025 Emirati Hub. All rights reserved. Made with By{" "}
                <span className="footer-devicebee">DeviceBee Technologies.</span>
              </p>
            </div>
            <div className="col-md-4 col-12" data-aos="fade-up" data-aos-delay="500">
              <div className="d-flex flex-column align-items-end gap-3">
                {/* Contact Information - Row 1 */}
                <div className="footer-contact-info">
                  <div className="footer-contact-item">
                    <img src={phoneImg} alt="Phone" className="footer-contact-icon" />
                    <span>971 25 364 1987</span>
                  </div>
                  <div className="footer-contact-item">
                    <img src={emailImg} alt="Email" className="footer-contact-icon" />
                    <span>info@emiratihub</span>
                  </div>
                </div>
                {/* Policy Links - Row 2 */}
                <div className="footer-policy-links">
                  <Link to="/terms" className="footer-policy-link">
                    Terms & Conditions
                  </Link>
                  <span className="footer-policy-separator">|</span>
                  <Link to="/privacy" className="footer-policy-link">
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
