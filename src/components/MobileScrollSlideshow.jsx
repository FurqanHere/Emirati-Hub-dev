import React from "react";
import logo from "../assets/images/logo.png";
import buildingImg from "../assets/images/building.jpeg";
import dashboardImg from "../assets/images/dashboard-bg-img.jpeg";
import {
  FaBriefcase,
  FaUserCheck,
  FaUserTie,
  FaClipboardList,
  FaUser,
  FaFingerprint,
  FaMagnifyingGlass,
  FaFilter,
  FaLocationDot,
  FaRegClock,
  FaUsers,
  FaHouse,
  FaCrown,
} from "react-icons/fa6";
import "./MobileScrollSlideshow.css";

const MobileScrollSlideshow = () => {
  const slides = [{ id: "slide1" }, { id: "slide2" }, { id: "slide3" }];

  return (
    <>
      <div className="d-block d-md-none d-flex justify-content-center align-items-center my-5">
        <div className="phone-frame">
          {/* Side Buttons */}
          <div className="side-button side-button-top-left"></div>
          <div className="side-button side-button-bottom-left"></div>
          <div className="side-button side-button-right"></div>

          <div className="phone-screen">
            {/* Static Notch */}
            <div className="phone-notch"></div>

            {/* Scrollable Container */}
            <div className="mobile-scroll-container">
              {slides.map((slide, index) => (
                <div key={index} className="slide-item">
                  {slide.id === "slide1" && (
                    <div className="slide-1">
                      <div className="slide-1-content">
                        <img
                          src={logo}
                          alt="Emirati Hub"
                          className="slide-1-logo"
                        />
                      </div>
                    </div>
                  )}

                  {slide.id === "slide3" && (
                    <div className="slide-3">
                      {/* Header Section */}
                      <div className="slide-3-header">
                        {/* BG Image */}
                        <img
                          src={dashboardImg}
                          alt="Dashboard"
                          className="slide-3-bg-img"
                        />
                        {/* Overlay */}
                        <div className="slide-3-overlay"></div>
                        {/* Content */}
                        <div className="slide-3-header-content">
                          <div className="slide-3-badge">
                            <FaCrown size={10} /> Explore For UAE Nationals
                          </div>
                          <h2 className="slide-3-title">
                            Premium Job Platform
                          </h2>
                          <p className="slide-3-subtitle">
                            Only For UAE Nationals
                          </p>
                          <div className="slide-3-btn-group">
                            <button className="slide-3-btn-login">
                              Login
                            </button>
                            <button className="slide-3-btn-signup">
                              Sign Up
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Body Section */}
                      <div className="slide-3-body">
                        <div className="slide-3-list-header">
                          <h3 className="slide-3-list-title">
                            Latest UAE National Jobs
                          </h3>
                          <span className="slide-3-list-count">
                            2500 Jobs
                          </span>
                        </div>

                        {/* Job Card 1 */}
                        <div className="job-card">
                          <div className="job-card-header">
                            <div className="job-card-header-left">
                              <div className="job-card-logo-box nbd">
                                <span className="job-card-logo-text">NBD</span>
                              </div>
                              <div className="job-card-info">
                                <h4 className="job-card-title">
                                  Project Manager
                                </h4>
                                <p className="job-card-company">
                                  Emirates NBD
                                </p>
                              </div>
                            </div>
                            <span className="job-card-badge">
                              Only For UAE Nationals
                            </span>
                          </div>

                          <div className="job-card-details">
                            <div className="job-card-detail-item">
                              <FaLocationDot /> Abu Dubai
                            </div>
                            <div className="job-card-detail-item">
                              <FaRegClock /> 1 day ago
                            </div>
                            <div className="job-card-detail-item">
                              <FaUsers /> 8 applicants
                            </div>
                          </div>

                          <div className="job-card-footer">
                            <span className="job-card-tag">
                              Full Time
                            </span>
                            <span className="job-card-salary">
                              AED 21,000 - 28,000
                            </span>
                          </div>

                          <button className="job-card-btn">
                            Easy Apply
                          </button>
                        </div>

                        {/* Job Card 2 */}
                        <div className="job-card">
                          <div className="job-card-header">
                            <div className="job-card-header-left">
                              <div className="job-card-logo-box du">
                                <span className="job-card-logo-text">du</span>
                              </div>
                              <div className="job-card-info">
                                <h4 className="job-card-title">
                                  Head of Department
                                </h4>
                                <p className="job-card-company">
                                  Du Company
                                </p>
                              </div>
                            </div>
                            <span className="job-card-badge">
                              Only For UAE Nationals
                            </span>
                          </div>
                          <div className="job-card-details">
                            <div className="job-card-detail-item">
                              <FaLocationDot /> Abu Dubai
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Nav */}
                      <div className="bottom-nav">
                        <FaHouse size={20} />
                        <FaBriefcase size={20} className="bottom-nav-icon" />
                        <FaMagnifyingGlass size={20} className="bottom-nav-icon" />
                        <FaUser size={20} className="bottom-nav-icon" />
                      </div>
                    </div>
                  )}

                  {slide.id === "slide2" && (
                    <div className="slide-2">
                      {/* Background Image */}
                      <img
                        src={buildingImg}
                        alt="Background"
                        className="slide-2-bg-img"
                      />
                      {/* Blue Overlay */}
                      <div className="slide-2-overlay"></div>

                      {/* Content */}
                      <div className="slide-2-content">
                        <div className="slide-2-header">
                          <h2 className="slide-2-title">
                            PREMIUM JOB <br /> PLATFORM
                          </h2>
                          <div className="slide-2-badge">
                            ONLY FOR UAE NATIONALS
                          </div>
                        </div>

                        <div className="slide-2-grid">
                          {[
                            { icon: <FaBriefcase />, label: "Find Job" },
                            { icon: <FaUserCheck />, label: "Shortlist" },
                            { icon: <FaUserTie />, label: "Interview" },
                            { icon: <FaFilter />, label: "Filters" },
                            { icon: <FaClipboardList />, label: "Plan" },
                            { icon: <FaUser />, label: "Profile" },
                          ].map((item, i) => (
                            <div key={i} className="slide-2-grid-item">
                              <div className="slide-2-icon">
                                {item.icon}
                              </div>
                              <span className="slide-2-label">
                                {item.label}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="slide-2-buttons-container">
                          <button className="slide-2-btn-uae">
                            <FaFingerprint
                              style={{ fontSize: "20px", color: "green" }}
                            />
                            Sign Up with UAE Pass
                          </button>

                          <button className="slide-2-btn-create">
                            Create New Account
                          </button>

                          <button className="slide-2-btn-guest">
                            Login with as a Guest
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileScrollSlideshow;
