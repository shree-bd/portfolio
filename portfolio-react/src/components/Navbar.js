import React from 'react';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <>
      {/* Dark Mode Toggle - Fixed to top right corner */}
      <button 
        className="theme-toggle-btn-fixed" 
        onClick={toggleDarkMode}
        aria-label="Toggle dark mode"
      >
        {darkMode ? (
          <i className="fas fa-sun"></i>
        ) : (
          <i className="fas fa-moon"></i>
        )}
      </button>

      <nav className={`navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target ${darkMode ? 'dark-nav' : ''}`} id="ftco-navbar">
        <div className="container">
          <a className="navbar-brand" href="#home-section">Shridhar Bhardwaj's Portfolio</a>
          
          <button 
            className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle" 
            type="button" 
            data-toggle="collapse" 
            data-target="#ftco-nav" 
            aria-controls="ftco-nav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="oi oi-menu"></span> Menu
          </button>

        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav nav ml-auto">
            <li className="nav-item">
              <a href="#home-section" className="nav-link">
                <span>Home</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#about-section" className="nav-link">
                <span>About</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#resume-section" className="nav-link">
                <span>Resume</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#certifications-section" className="nav-link">
                <span>Certificates</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#project-section" className="nav-link">
                <span>Projects</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact-section" className="nav-link">
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar; 