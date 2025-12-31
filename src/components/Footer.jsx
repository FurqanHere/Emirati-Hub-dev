import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../assets/images/logo.png";
import footerLeftAngle from "../assets/images/fooyer-left-angle.png";
import footerRightAngle from "../assets/images/footer-right-angle.png";
import phoneImg from "../assets/images/phone-img.png";
import emailImg from "../assets/images/email.png";

const Footer = () => {
  const { t } = useTranslation();
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
            {t("footer.mainText")}
          </p>

          {/* Navigation Links */}
          <nav className="footer-nav-links" data-aos="fade-up" data-aos-delay="300">
            <button 
              className="footer-nav-link-btn"
              onClick={() => handleSectionNavigation('home')}
            >
              {t("footer.home")}
            </button>
            <button 
              className="footer-nav-link-btn"
              onClick={() => handleSectionNavigation('aboutus')}
            >
              {t("footer.about")}
            </button>
            <button 
              className="footer-nav-link-btn"
              onClick={() => handleSectionNavigation('screenshot')}
            >
              {t("footer.screenshots")}
            </button>
            <button 
              className="footer-nav-link-btn"
              onClick={() => handleSectionNavigation('downloadApp')}
            >
              {t("footer.downloadApp")}
            </button>
            
            <button 
              className="footer-nav-link-btn"
              onClick={() => handleSectionNavigation('contactUs')}
            >
              {t("footer.contactUs")}
            </button>
          </nav>
        </div>
      </div>

      {/* Footer Bottom Bar with Copyright and Contact */}
      <div className="footer-bottom-bar">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 col-12 mb-3 mb-md-0">
              <p className="footer-copyright-text mb-0">
                © {t("footer.copyright")}
                <span className="footer-devicebee ms-1">{t("footer.devicebee")}</span>
              </p>
            </div>
            <div className="col-md-6 col-12">
              <div className="d-flex flex-column align-items-end gap-3">
                {/* Contact Information - Row 1 */}
                <div className="footer-contact-info">
                  <a 
                    href="tel:+971545426448" 
                    className="footer-contact-item"
                  >
                    <img src={phoneImg} alt="Phone" className="footer-contact-icon" />
                    <span>+971 54 542 6448</span>
                  </a>
                  <a 
                    href="mailto:info@emirati-hub.ae" 
                    className="footer-contact-item"
                  >
                    <img src={emailImg} alt="Email" className="footer-contact-icon" />
                    <span>info@emirati-hub.ae</span>
                  </a>
                  <a 
                    href="https://wa.me/971545426448" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="footer-contact-item"
                  >
                    <i className="bi bi-whatsapp footer-contact-icon"></i>
                  </a>
                </div>
                {/* Policy Links - Row 2 */}
                {/* <div className="footer-policy-links">
                  <Link to="/terms" className="footer-policy-link">
                    {t("footer.terms")}
                  </Link>
                  <span className="footer-policy-separator">|</span>
                  <Link to="/privacy" className="footer-policy-link">
                    {t("footer.privacy")}
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
