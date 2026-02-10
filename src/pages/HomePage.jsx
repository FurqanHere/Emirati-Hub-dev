import React, { useState, useEffect, useRef } from "react";

import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileScrollSlideshow from "../components/MobileScrollSlideshow";

import crownImg from "../assets/images/crown.png";
import headerImg from "../assets/images/header-main-img.png";

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
import AnimatedText from "../components/AnimatedText";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

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
    const careers = [
    { img: marketingImg, title: "homepage.careers.marketing", count: 1542, colorClass: "career-icon-marketing" },
    { img: designImg, title: "homepage.careers.design", count: 748, colorClass: "career-icon-design" },
    { img: humsnImg, title: "homepage.careers.humanResearch", count: 290, colorClass: "career-icon-humsn" },
    { img: financeImg, title: "homepage.careers.finance", count: 349, colorClass: "career-icon-finance" },
    { img: healthImg, title: "homepage.careers.healthcare", count: 1542, colorClass: "career-icon-health" },
    { img: armforceguideImg, title: "homepage.careers.armforce", count: 748, colorClass: "career-icon-armforce" },
    { img: businessImg, title: "homepage.careers.business", count: 290, colorClass: "career-icon-business" },
    { img: legalImg, title: "homepage.careers.legal", count: 349, colorClass: "career-icon-legal" },
    { img: airportImg, title: "homepage.careers.airport", count: 748, colorClass: "career-icon-airport" },
    { img: projectImg, title: "homepage.careers.project", count: 290, colorClass: "career-icon-project" },
    { img: manufactureImg, title: "homepage.careers.manufacture", count: 349, colorClass: "career-icon-manufacture" },
  ];

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

  const careers = [
    { img: marketingImg, title: "homepage.careers.marketing", count: 1542, colorClass: "career-icon-marketing" },
    { img: designImg, title: "homepage.careers.design", count: 748, colorClass: "career-icon-design" },
    { img: humsnImg, title: "homepage.careers.humanResearch", count: 290, colorClass: "career-icon-humsn" },
    { img: financeImg, title: "homepage.careers.finance", count: 349, colorClass: "career-icon-finance" },
    { img: healthImg, title: "homepage.careers.healthcare", count: 1542, colorClass: "career-icon-health" },
    { img: armforceguideImg, title: "homepage.careers.armforce", count: 748, colorClass: "career-icon-armforce" },
    { img: businessImg, title: "homepage.careers.business", count: 290, colorClass: "career-icon-business" },
    { img: legalImg, title: "homepage.careers.legal", count: 349, colorClass: "career-icon-legal" },
    { img: airportImg, title: "homepage.careers.airport", count: 748, colorClass: "career-icon-airport" },
    { img: projectImg, title: "homepage.careers.project", count: 290, colorClass: "career-icon-project" },
    { img: manufactureImg, title: "homepage.careers.manufacture", count: 349, colorClass: "career-icon-manufacture" },
  ];

  const chunkArray = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );
  };

  const careerChunks = chunkArray(careers, 2);

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
                  <div className="">
                    <h1 className="emirati-hero-heading text-white">
                      <AnimatedText 
                        text={t("homepage.heroTitle")} 
                        tag="span" 
                        animationDelay={0.05} 
                      />
                      <br />
                      <AnimatedText 
                        text={t("homepage.heroTitleii")} 
                        tag="span" 
                        baseIndex={t("homepage.heroTitle").length}
                        animationDelay={0.05} 
                      />
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
                  <img src={ headerImg } alt="" data-aos="zoom-in" data-aos-duration="1200" />
                </div>

                {/* Mobile */}
                <MobileScrollSlideshow />
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
            <AnimatedText 
              text={t("homepage.careersTitle")}
              tag="span"
              animationDelay={0.03}
            />
          </h2>
          <div className="careers-section-description">
            <AnimatedText 
              text={t("homepage.careersDescription")}
              tag="p"
              animationDelay={0.01}
            />
          </div>
        </div>

        {/* Mobile Slider */}
        <div className="d-lg-none">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1.2}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
            }}
            className="careers-swiper"
          >
            {careerChunks.map((chunk, chunkIndex) => (
              <SwiperSlide key={chunkIndex}>
                <div className="d-flex flex-column gap-4 h-100">
                  {chunk.map((career, index) => (
                    <div
                      key={index}
                      className="career-card"
                      data-aos="fade-up"
                      data-aos-delay={(chunkIndex * 2 + index) * 50}
                    >
                      <div className={`career-icon-wrapper ${career.colorClass}`}>
                        <img
                          src={career.img}
                          alt={t(career.title)}
                          className="career-icon"
                        />
                      </div>
                      <div className="career-content">
                        <h5 className="career-title">
                          {t(career.title)}
                        </h5>
                        <p className="career-jobs">
                          {career.count} {t("homepage.jobsAvailable")}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <div className="row g-4 d-none d-lg-flex justify-content-center">
          {careers.map((career, index) => (
            <div 
              key={index} 
              className="col-lg-3 col-md-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div className="career-card h-100">
                <div className={`career-icon-wrapper ${career.colorClass}`}>
                  <img
                    src={career.img}
                    alt={t(career.title)}
                    className="career-icon"
                  />
                </div>
                <div className="career-content">
                  <h5 className="career-title">
                    {t(career.title)}
                  </h5>
                  <p className="career-jobs">
                    {career.count} {t("homepage.jobsAvailable")}
                  </p>
                </div>
              </div>
            </div>
          ))}
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
                  data-aos="zoom-in"
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
                <AnimatedText 
                  text={t("homepage.employeeApp.title")}
                  tag="span"
                  animationDelay={0.03}
                />
              </h2>
              <div className="app-section-description">
                <AnimatedText 
                  text={t("homepage.employeeApp.description")}
                  tag="p"
                  animationDelay={0.01}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Company App Section */}
      <div className="container py-5 employee-app-section" id="companyApp">
        <div className="row align-items-center">
          {/* Left Column */}
          <div
            className="col-lg-6 company-app-section-left-column order-2 order-lg-1"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <h2 className="app-section-title">
              <AnimatedText 
                text={t("homepage.companyApp.title")}
                tag="span"
                animationDelay={0.03}
              />
            </h2>
            <div className="app-section-description">
              <AnimatedText 
                text={t("homepage.companyApp.description")}
                tag="p"
                animationDelay={0.01}
              />
            </div>
          </div>

          {/* Right Column */}
          <div
            className="col-lg-6 position-relative order-1 order-lg-2 mb-5 mb-lg-0"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="company-img">
              <div className="employee-large-phone">
                <img
                  src={companyAppImg}
                  alt="Employee App Yellow"
                  className="phone-mockup-large-blue"
                  data-aos="zoom-in"
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
                data-aos="zoom-in-up"
              />
            </div>
            <div className="col-lg-7" data-aos="fade-left" data-aos-delay="200">
              <div className="download-app-content">
                <h2 className="download-app-title">
                  <AnimatedText 
                    text={t("homepage.downloadApp.title")}
                    tag="span"
                    animationDelay={0.03}
                  />
                  
                  <span className="download-app-title-highlight">
                    <span className="download-app-title-highlight-only">
                      <AnimatedText 
                        text={t("homepage.downloadApp.highlight")}
                        tag="span"
                        animationDelay={0.03}
                      />
                    </span>
                    <AnimatedText 
                      text={t("homepage.downloadApp.nationalsBest")}
                      tag="span"
                      animationDelay={0.03}
                    />
                    
                    <br className="none" /> 
                    <AnimatedText 
                      text={t("homepage.downloadApp.findJobs")}
                      tag="span"
                      animationDelay={0.03}
                    />
                  </span>
                </h2>
                <div className="download-app-description">
                  <AnimatedText 
                    text={t("homepage.downloadApp.description")}
                    tag="p"
                    animationDelay={0.01}
                  />
                </div>
                <div className="download-app-buttons">
                  {/* <a
                    href="https://apps.apple.com/ae/app/emiratihub/id6753808339"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="download-store-link"
                  >
                    <img
                      src={playStoreImg}
                      alt="Get it on Google Play"
                      className="store-button-img"
                    />
                  </a> */}
                  <a
                    href="https://apps.apple.com/ae/app/emiratihub/id6753808339"
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
