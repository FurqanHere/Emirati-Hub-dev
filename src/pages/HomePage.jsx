import React, { useState, useEffect, useRef } from "react";

import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

import crownImg from "../assets/images/crown.png";
import headerImg from "../assets/images/header-main-img.png";
import appSsImg from "../assets/images/app-ss.png";

import marketingImg from "../assets/images/marketing.png";
import designImg from "../assets/images/design.png";
import humsnImg from "../assets/images/humsn.png";
import financeImg from "../assets/images/finance.png";
import healthImg from "../assets/images/health.png";
import armforceguideImg from "../assets/images/armforceguide.png";
import businessImg from "../assets/images/business.png";
import legalImg from "../assets/images/legal.png";
import airportImg from "../assets/images/airport.png";
import projectImg from "../assets/images/project.png";
import manufactureImg from "../assets/images/manufacture.png";

import employeeAppImg from "../assets/images/employee-app.png";
import companyAppImg from "../assets/images/company-app.png";
import helpAppImg from "../assets/images/help-app-ss-img.png";

import appStoreImg from "../assets/images/app-store.png";
import playStoreImg from "../assets/images/play-store.png";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

import ApiService from "../services/ApiService";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const moveX = scrollPosition * 0.5;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const svgRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    const path = pathRef.current;

    if (!svg || !path) return;

    const scroll = () => {
      const distance = window.scrollY;
      const totalDistance = svg.clientHeight - window.innerHeight;
      console.log(totalDistance);
      const percentage = distance / totalDistance;
      const pathLength = path.getTotalLength();

      path.style.strokeDasharray = `${pathLength}`;
      path.style.strokeDashoffset = `${pathLength * (1 - percentage)}`;
    };

    scroll();
    window.addEventListener("scroll", scroll);

    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = location.hash.replace("#", "");
      scroller.scrollTo(section, {
        duration: 500,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
  }, [location]);

  return (
    <>
      <div className="img1">
        <Header />
        {/* Banner Sec */}
        <div className="header-banner" id="home">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12">
                <div className="header-txt1 text-center">
                  <div
                    className=""
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <h1 className="emirati-hero-heading text-white">
                      {t("homepage.heroTitle")}
                      <br />
                      {t("homepage.heroTitleii")}
                    </h1>
                  </div>
                  <div
                    className="d-flex justify-content-center mt-5"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <button className="btn emirati-crown-btn rounded-pill">
                      <img src={crownImg} alt="Crown" className="crown-icon" />
                      <span>{t("homepage.heroButton")}</span>
                    </button>
                  </div>
                </div>
                <div className="hero-visual d-none d-md-flex">
                  <img src={ headerImg } alt="" />
                </div>

                {/* Mobile */}
                <img
                  src={appSsImg}
                  className="w-100 d-block d-md-none"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Explore Careers Section */}
      <div className="container py-5 careers-section" id="careers">
        <div
          className="text-center mb-5"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2 className="careers-section-heading">
            {t("homepage.careersTitle")}
          </h2>
          <p className="careers-section-description">
            {t("homepage.careersDescription")}
          </p>
        </div>

        <div className="row g-4 careers-grid">
          {/* Row 1 */}
          <div
            className="col-md-3 col-sm-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="career-card">
              <div className="career-icon-wrapper career-icon-marketing">
                <img
                  src={marketingImg}
                  alt="Marketing"
                  className="career-icon"
                />
              </div>
              <div className="career-content">
                <h5 className="career-title">
                  {t("homepage.careers.marketing")}
                </h5>
                <p className="career-jobs">
                  1542 {t("homepage.jobsAvailable")}
                </p>
              </div>
            </div>
          </div>

          <div
            className="col-md-3 col-sm-6"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <div className="career-card">
              <div className="career-icon-wrapper career-icon-design">
                <img src={designImg} alt="Design" className="career-icon" />
              </div>
              <div className="career-content">
                <h5 className="career-title">{t("homepage.careers.design")}</h5>
                <p className="career-jobs">748 {t("homepage.jobsAvailable")}</p>
              </div>
            </div>
          </div>

          <div
            className="col-md-3 col-sm-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="career-card">
              <div className="career-icon-wrapper career-icon-humsn">
                <img
                  src={humsnImg}
                  alt="Human Research"
                  className="career-icon"
                />
              </div>
              <div className="career-content">
                <h5 className="career-title">
                  {t("homepage.careers.humanResearch")}
                </h5>
                <p className="career-jobs">290 {t("homepage.jobsAvailable")}</p>
              </div>
            </div>
          </div>

          <div
            className="col-md-3 col-sm-6"
            data-aos="fade-up"
            data-aos-delay="350"
          >
            <div className="career-card">
              <div className="career-icon-wrapper career-icon-finance">
                <img src={financeImg} alt="Finance" className="career-icon" />
              </div>
              <div className="career-content">
                <h5 className="career-title">
                  {t("homepage.careers.finance")}
                </h5>
                <p className="career-jobs">349 {t("homepage.jobsAvailable")}</p>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div
            className="col-md-3 col-sm-6"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="career-card">
              <div className="career-icon-wrapper career-icon-health">
                <img src={healthImg} alt="Healthcare" className="career-icon" />
              </div>
              <div className="career-content">
                <h5 className="career-title">
                  {t("homepage.careers.healthcare")}
                </h5>
                <p className="career-jobs">
                  1542 {t("homepage.jobsAvailable")}
                </p>
              </div>
            </div>
          </div>

          <div
            className="col-md-3 col-sm-6"
            data-aos="fade-up"
            data-aos-delay="450"
          >
            <div className="career-card">
              <div className="career-icon-wrapper career-icon-armforce">
                <img
                  src={armforceguideImg}
                  alt="Armforce"
                  className="career-icon"
                />
              </div>
              <div className="career-content">
                <h5 className="career-title">
                  {t("homepage.careers.armforce")}
                </h5>
                <p className="career-jobs">748 {t("homepage.jobsAvailable")}</p>
              </div>
            </div>
          </div>

          <div
            className="col-md-3 col-sm-6"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="career-card">
              <div className="career-icon-wrapper career-icon-business">
                <img src={businessImg} alt="Business" className="career-icon" />
              </div>
              <div className="career-content">
                <h5 className="career-title">
                  {t("homepage.careers.business")}
                </h5>
                <p className="career-jobs">290 {t("homepage.jobsAvailable")}</p>
              </div>
            </div>
          </div>

          <div
            className="col-md-3 col-sm-6"
            data-aos="fade-up"
            data-aos-delay="550"
          >
            <div className="career-card">
              <div className="career-icon-wrapper career-icon-legal">
                <img src={legalImg} alt="Legal" className="career-icon" />
              </div>
              <div className="career-content">
                <h5 className="career-title">{t("homepage.careers.legal")}</h5>
                <p className="career-jobs">349 {t("homepage.jobsAvailable")}</p>
              </div>
            </div>
          </div>

          {/* Row 3 (flattened for mobile slider) */}
          <div
            className="col-md-3 col-sm-6"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="career-card">
              <div className="career-icon-wrapper career-icon-airport">
                <img src={airportImg} alt="Airport" className="career-icon" />
              </div>
              <div className="career-content">
                <h5 className="career-title">
                  {t("homepage.careers.airport")}
                </h5>
                <p className="career-jobs">748 {t("homepage.jobsAvailable")}</p>
              </div>
            </div>
          </div>

          <div
            className="col-md-3 col-sm-6"
            data-aos="fade-up"
            data-aos-delay="650"
          >
            <div className="career-card">
              <div className="career-icon-wrapper career-icon-project">
                <img src={projectImg} alt="Project" className="career-icon" />
              </div>
              <div className="career-content">
                <h5 className="career-title">
                  {t("homepage.careers.project")}
                </h5>
                <p className="career-jobs">290 {t("homepage.jobsAvailable")}</p>
              </div>
            </div>
          </div>

          <div
            className="col-md-3 col-sm-6"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <div className="career-card">
              <div className="career-icon-wrapper career-icon-manufacture">
                <img
                  src={manufactureImg}
                  alt="Manufacture"
                  className="career-icon"
                />
              </div>
              <div className="career-content">
                <h5 className="career-title">
                  {t("homepage.careers.manufacture")}
                </h5>
                <p className="career-jobs">349 {t("homepage.jobsAvailable")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Employee App Section */}
      <div className="container py-5 employee-app-section" id="employeeApp">
        <div className="row align-items-center">
          {/* Left Column - Text Content */}
          <div
            className="col-lg-6 position-relative"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="employee-img">
              <div className="employee-large-phone">
                <img
                  src={employeeAppImg}
                  alt="Employee App Yellow"
                  className="phone-mockup-large"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Large Yellow Phone */}
          <div
            className="col-lg-6 employee-app-section-right-column"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="ms-5 app-section-content">
              <h2 className="app-section-title">
                {t("homepage.employeeApp.title")}
              </h2>
              <p className="app-section-detail">
                {t("homepage.employeeApp.detail")}
              </p>
              <p className="app-section-description">
                {t("homepage.employeeApp.description")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Company App Section */}
      <div className="container py-5 employee-app-section" id="companyApp">
        <div className="row align-items-center">
          {/* Left Column */}
          <div
            className="col-lg-6 company-app-section-left-column"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <h2 className="app-section-title">
              {t("homepage.companyApp.title")}
            </h2>
            <p className="app-section-detail">
              {t("homepage.companyApp.detail")}
            </p>
            <p className="app-section-description">
              {t("homepage.companyApp.description")}
            </p>
          </div>

          {/* Right Column */}
          <div
            className="col-lg-6 position-relative"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="company-img">
              <div className="employee-large-phone">
                <img
                  src={companyAppImg}
                  alt="Employee App Yellow"
                  className="phone-mockup-large-blue"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Download App Section */}
      <div
        className="download-app-section container position-relative"
        id="downloadApp"
      >
        <div className="">
          <div className="row align-items-center">
            <div
              className="col-lg-5"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <img
                src={helpAppImg}
                alt="App Screenshot"
                className="download-app-img"
              />
            </div>
            <div className="col-lg-7" data-aos="fade-left" data-aos-delay="200">
              <div className="download-app-content">
                <h2 className="download-app-title">
                  {t("homepage.downloadApp.title")}{" "}
                  <span className="download-app-title-highlight">
                    <span className="download-app-title-highlight-only">
                      {t("homepage.downloadApp.highlight")}
                    </span>{" "}
                    {t("homepage.downloadApp.nationalsBest")}{" "}
                    <br className="none" /> {t("homepage.downloadApp.findJobs")}
                  </span>
                </h2>
                <p className="download-app-description">
                  {t("homepage.downloadApp.description")}
                </p>
                <div className="download-app-buttons">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="download-store-link"
                  >
                    <img
                      src={playStoreImg}
                      alt="Get it on Google Play"
                      className="store-button-img"
                    />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="download-store-link"
                  >
                    <img
                      src={appStoreImg}
                      alt="Download on the App Store"
                      className="store-button-img"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default HomePage;
