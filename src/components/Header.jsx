import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from "react-i18next";
import logo from "../assets/images/logo.png";
import { UAEFlag, UKFlag } from "./FlagIcons";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Navbar({ background = "" }) {
  const { t, i18n } = useTranslation();
  const [activeLink, setActiveLink] = useState("/");
  const [isScrolled, setIsScrolled] = useState(false);
  
  const links = [
    { name: t("header.home"), path: "home", type: "section", key: "home" },
    { name: t("header.aboutUs"), path: "aboutus", type: "section", key: "about" },
    { name: t("header.features"), path: "careers", type: "section", key: "features" },
    { name: t("header.downloadApp"), path: "downloadApp", type: "section", key: "downloadApp" },
  ];

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
    
    // Update document direction
    document.documentElement.setAttribute('dir', newLang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', newLang);
  };

  useEffect(() => {
    const currentLang = i18n.language || localStorage.getItem('language') || 'en';
    const direction = currentLang === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", direction);
    document.documentElement.setAttribute("lang", currentLang);
    if (i18n.language !== currentLang) {
      i18n.changeLanguage(currentLang);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    const offcanvas = document.getElementById('offcanvasNavbar');
    if (offcanvas) {
      const bsOffcanvas = window.bootstrap?.Offcanvas?.getInstance(offcanvas);
      if (bsOffcanvas) {
        bsOffcanvas.hide();
      } else {
        const closeBtn = offcanvas.querySelector('.btn-close');
        if (closeBtn) closeBtn.click();
      }
    }
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg ${background} ${isScrolled ? 'navbar-fixed' : ''}`}>
        <div className="container navbar-container">
          {/* Logo - Left */}
          <Link className="navbar-brand navbar-logo" to="/" data-aos="fade-down" data-aos-delay="100">
            <img src={logo} alt="EMIRATI HUB" className="logo" />
        </Link>

        <button
            className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
        >
          <span className="navbar-toggler-icon" />
        </button>

          {/* Menu Links - Center */}
          <div className="navbar-nav-center d-none d-lg-flex" data-aos="fade-down" data-aos-delay="200" key={i18n.language}>
            <ul className="navbar-nav">
              {links.map((l, index) => (
              <li
                className="nav-item"
                key={l.path}
                  data-aos="fade-down"
                  data-aos-delay={300 + (index * 50)}
              >
                  {l.type === "route" ? (
                    <Link
                      to={l.path}
                      className={`nav-link ${
                        activeLink === l.path ? "active" : ""
                      }`}
                      onClick={() => setActiveLink(l.path)}
                    >
                      {l.name}
                    </Link>
                  ) : l.path === "contact" ? (
                    <Link
                      to="/"
                      className={`nav-link ${
                        activeLink === l.path ? "active" : ""
                      }`}
                      onClick={() => setActiveLink(l.path)}
                    >
                      {l.name}
                    </Link>
                  ) : (
                    <Link
                      to={`/#${l.path}`}
                      className={`nav-link ${
                        activeLink === l.path ? "active" : ""
                      }`}
                      onClick={() => setActiveLink(l.path)}
                    >
                      {l.name}
                    </Link>
                  )}
                  
              </li>
            ))}
          </ul>
          </div>

          {/* Language Switcher Button - Right */}
          <div className="navbar-actions d-none d-lg-flex" data-aos="fade-down" data-aos-delay="500">
            <button 
              className="btn language-switcher-btn-modern" 
              onClick={toggleLanguage}
              title={i18n.language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
            >
              {i18n.language === 'en' ? (
                <UAEFlag style={{ width: '28px', height: '28px', borderRadius: '50%', objectFit: 'cover' }} />
              ) : (
                <UKFlag style={{ width: '28px', height: '28px', borderRadius: '50%', objectFit: 'cover' }} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* ───── OFF‑CANVAS (mobile only) ───── */}
      <div
        className="offcanvas offcanvas-start d-lg-none"
        id="offcanvasNavbar"
        tabIndex="-1"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title mb-0 d-flex align-items-center">
            <img src={logo} alt="EMIRATI HUB" className="logo" data-aos="fade-right" />
          </h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>

        <div className="offcanvas-body">
          <ul className="navbar-nav gap-3">
            {links.map((l) => (
              <li
                className="nav-item d-flex flex-column align-items-start"
                key={l.path}
              >
                {l.type === "route" ? (
                  <Link
                    style={{ fontSize: "1.125rem" }}
                    to={l.path}
                    className={`nav-link ${
                      activeLink === l.path ? "active" : ""
                    }`}
                    onClick={() => {
                      setActiveLink(l.path);
                      closeMenu();
                    }}
                  >
                    {l.name}
                  </Link>
                ) : (
                  <Link
                    style={{ fontSize: "1.125rem" }}
                    to={`/#${l.path}`}
                    className={`nav-link ${
                      activeLink === l.path ? "active" : ""
                    }`}
                    onClick={() => {
                      setActiveLink(l.path);
                      closeMenu();
                    }}
                  >
                    {l.name}
                  </Link>
                )}
                
              </li>
            ))}
          </ul>
          <button
            className="btn language-switcher-btn-modern d-flex justify-content-center align-items-center gap-2"
            onClick={() => {
              toggleLanguage();
              closeMenu();
            }}
          >
            {i18n.language === 'en' ? (
              <>
                <span className="text-dark fw-bold me-2">Switch to Arabic</span>
                <UAEFlag style={{ width: '32px', borderRadius: '4px' }} />
              </>
            ) : (
              <>
                <span className="text-dark fw-bold me-2">Switch to English</span>
                <UKFlag style={{ width: '32px', borderRadius: '4px' }} />
              </>
            )}
          </button>
        </div>
      </div>
    </>
  );
}
