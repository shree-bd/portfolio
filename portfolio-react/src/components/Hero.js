import React, { useState, useEffect } from 'react';
import heroImage from '../assets/images/bg_1.png';

const Hero = ({ darkMode }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const typingTexts = [
    'Full-Stack Software Engineer',
    'Data Engineer',
    'Python Developer',
    'AI/ML Practitioner',
  ];

  useEffect(() => {
    const typeText = () => {
      const currentText = typingTexts[currentTextIndex];
      
      if (isDeleting) {
        setDisplayText(currentText.substring(0, currentCharIndex - 1));
        setCurrentCharIndex(prev => prev - 1);
      } else {
        setDisplayText(currentText.substring(0, currentCharIndex + 1));
        setCurrentCharIndex(prev => prev + 1);
      }
    };

    const timer = setTimeout(() => {
      const currentText = typingTexts[currentTextIndex];
      let typeSpeed = isDeleting ? 30 : 80;
      
      if (!isDeleting && currentCharIndex === currentText.length) {
        typeSpeed = 2000; // Pause at end
        setIsDeleting(true);
      } else if (isDeleting && currentCharIndex === 0) {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % typingTexts.length);
        typeSpeed = 500; // Pause before next text
      } else {
        typeText();
      }
    }, isDeleting ? 30 : (!isDeleting && currentCharIndex === typingTexts[currentTextIndex].length) ? 2000 : 80);

    return () => clearTimeout(timer);
  }, [currentTextIndex, currentCharIndex, isDeleting, typingTexts]);

  return (
    <section id="home-section" className="hero">
      <div className="home-slider">
        <div className="slider-item">
          <div className="overlay"></div>
          <div className="container">
            <div className="row d-md-flex no-gutters slider-text align-items-end justify-content-end">
              <div className="one-third js-fullheight order-md-last img" style={{
                backgroundImage: `url(${heroImage})`,
                backgroundSize: '60%',
                backgroundPosition: 'center 50px'
              }}>
                <div className="overlay"></div>
              </div>
              <div className="one-forth d-flex align-items-center" data-aos="fade-up">
                <div className="text">
                  <span className="subheading">Hello! 👋</span>
                  <h1 className="mb-4 mt-3">I'm <span>Shridhar Bhardwaj</span></h1>
                  
                  {/* Element to contain animated typing */}
                  <span id="typing-animation">{displayText}</span>
                  
                  <br />
                  <br />
                  <h2>🚀 Full-Stack Software Engineer</h2>
                  <p className="lead">
                    Experienced software engineer with 5+ years of expertise in building and maintaining scalable applications using Python, Java, FastAPI, Django, Spring Boot, and ReactJS.
                    Proficient in cloud technologies, RESTful APIs, and database systems, with hands-on experience integrating Generative AI and machine learning for intelligent automation.
                    Outside of work, I enjoy hiking, cooking, and solving Sudoku puzzles to keep both body and mind active.
                  </p>
                  <p>
                    <a href="https://www.linkedin.com/in/shri007/" className="btn btn-white btn-outline-white py-3 px-4">
                      <i className="fab fa-linkedin"></i> LinkedIn
                    </a>
                    <a href="https://github.com/shree-bd" className="btn btn-white btn-outline-white py-3 px-4">
                      <i className="fab fa-github"></i> GitHub
                    </a>
                    <a href="mailto:shridharbhardwaj@gmail.com" className="btn btn-white btn-outline-white py-3 px-4">
                      <i className="fas fa-envelope"></i> Contact
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 