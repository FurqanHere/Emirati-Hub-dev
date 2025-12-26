import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import logo from "../assets/images/logo.png";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const links = [
  { name: "Home", path: "home", type: "section" },
  { name: "About", path: "aboutus", type: "section" },
  { name: "Download App", path: "downloadApp", type: "section" },
  { name: "Contact US", path: "contact", type: "section" },
];

export default function Navbar({ background = "" }) {
  const [activeLink, setActiveLink] = useState("/");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar navbar-expand-lg ${background} ${isScrolled ? 'navbar-fixed' : ''}`}>
        <div className="container navbar-container">
          {/* Logo - Left */}
          <Link className="navbar-brand navbar-logo" to="/" data-scroll-animation="fade-down" data-scroll-delay="100">
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
          <div className="navbar-nav-center d-none d-lg-flex" data-scroll-animation="fade-down" data-scroll-delay="200">
            <ul className="navbar-nav">
              {links.map((l, index) => (
              <li
                className="nav-item"
                key={l.path}
                  data-scroll-animation="fade-down"
                  data-scroll-delay={300 + (index * 50)}
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

          {/* Get Started Button - Right */}
          <div className="navbar-actions d-none d-lg-flex">
            <Link className="btn get-started-btn shadow rounded-pill" to="/#home">
              Get Started
            </Link>
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
            <img src={logo} alt="EMIRATI HUB" className="logo" />
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
                    onClick={() => setActiveLink(l.path)}
                    data-bs-dismiss="offcanvas"
                  >
                    {l.name}
                  </Link>
                ) : (
                  <ScrollLink
                    style={{ fontSize: "1.125rem" }}
                    to={l.path}
                    smooth
                    duration={200}
                    spy
                    className={`nav-link ${
                      activeLink === l.path ? "active" : ""
                    }`}
                    onClick={() => setActiveLink(l.path)}
                    data-bs-dismiss="offcanvas"
                  >
                    {l.name}
                  </ScrollLink>
                )}
                
              </li>
            ))}
          </ul>
          <Link
            className="btn get-started-btn w-100 justify-content-center mt-4"
            to="/#home"
            data-bs-dismiss="offcanvas"
          >
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
}
