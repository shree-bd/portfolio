import React, { useState, useEffect, useRef } from 'react';

const AnimatedCounter = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  return (
    <span ref={counterRef} className="number">
      {count}{suffix}
    </span>
  );
};

const Statistics = ({ darkMode }) => {
  const stats = [
    { number: 5, suffix: '+', label: 'Years Experience' },
    { number: 50, suffix: '+', label: 'Projects Completed' },
    { number: 100, suffix: 'M+', label: 'Users Impacted' },
    { number: 25, suffix: '+', label: 'Technologies Mastered' }
  ];

  return (
    <>
      <section className={`ftco-section ftco-no-pt ftco-no-pb ftco-counter img ${darkMode ? 'dark-section' : ''}`} id="section-counter">
        <div className="container">
          <div className="row d-md-flex align-items-center">
            {stats.map((stat, index) => (
              <div key={index} className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                <div className="block-18">
                  <div className="text">
                    <strong>
                      <AnimatedCounter 
                        end={stat.number} 
                        suffix={stat.suffix}
                        duration={2500}
                      />
                    </strong>
                    <span className="counter-label">{stat.label}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className={`ftco-section ftco-hireme img margin-top ${darkMode ? 'dark-hireme' : ''}`} style={{
          backgroundImage: 'url(images/bg_1.jpg)'
        }}>
          <div className="row justify-content-center">
            <div className="col-md-7 ftco-animate text-center">
              <h2>More projects on<span> Github </span></h2>
              <div className="heading">
                <h4>I love to solve business problems &amp; uncover hidden data stories</h4>
                <br />
                <p>
                  <a href="https://github.com/shree-bd" className="btn btn-primary py-3 px-5">
                    <i className="fab fa-github me-2"></i>
                    GitHub
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Statistics; 