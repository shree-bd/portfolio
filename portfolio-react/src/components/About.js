import React, { useState, useEffect, useRef } from 'react';
import aboutImage from '../assets/images/about-me.png';

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

const About = ({ darkMode }) => {
  const skills = [
    { name: 'Python', rating: 5 },
    { name: 'Java', rating: 4.5 },
    { name: 'Django', rating: 5 },
    { name: 'FastAPI', rating: 4.5 },
    { name: 'Spring Boot', rating: 4.5 },
    { name: 'PostgreSQL / Databases', rating: 5 },
    { name: 'AWS / Cloud Technologies', rating: 4 },
    { name: 'Docker / Kubernetes', rating: 4 },
    { name: 'React.js / JavaScript', rating: 4 },
    { name: 'REST APIs', rating: 5 },
    { name: 'Machine Learning', rating: 4 },
    { name: 'Microservices', rating: 4 }
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="fas fa-star text-warning"></i>);
    }
    
    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt text-warning"></i>);
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star text-warning"></i>);
    }
    
    return stars;
  };

  return (
    <section className="ftco-about img ftco-section ftco-no-pb" id="about-section">
      <div className="container">
        <div className="row">
          <div className="row d-flex align-items-stretch">
            <div className="col-md-6 col-lg-5 d-flex">
              <div className="img-about img d-flex align-items-stretch">
                <div className="overlay">
                  <div className="row">
                    <div className="col-sm-6 col-md-5">
                      <div className="about-img">
                        <img src={aboutImage} className="img-fluid rounded b-shadow-a" alt="Shridhar Bhardwaj" />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-7">
                      <div className="about-info">
                        <p><span className="title-s">Name: </span> <span>Shridhar Bhardwaj</span></p>
                        <p><span className="title-s">Job Role: </span> <span>Full-Stack Software Engineer</span></p>
                        <p><span className="title-s">Experience: </span> <span>5+ Years</span></p>
                        <p><span className="title-s">Location: </span> <span>Charlotte, NC USA</span></p>
                        <p><span className="title-s">Email: </span> <span>shridharbhardwaj@gmail.com</span></p>
                      </div>
                    </div>
                  </div>

                  <div className="skill-mf">
                    <p className="title-s">Core Technologies</p>
                    {skills.map((skill, index) => (
                      <div key={index} className="skill-item mb-3">
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="skill-name">{skill.name}</span>
                                                     <div className="skill-rating">
                             {renderStars(skill.rating)}
                           </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-7 pl-lg-5 pb-5">
              <div className="row justify-content-start pb-3">
                <div className="col-md-12 heading-section ftco-animate">
                  <h1 className="big">About</h1>
                  <h2 className="mb-4">About Me</h2>
                  
                  <p>
                   🚀 Experienced Full Stack Developer with 5+ years of comprehensive experience in developing 
                      and maintaining enterprise-scale applications. Currently working at Ameriprise Financial, 
                      managing wealth for 100M+ customers across the United States.
                  </p>
                  
                  <p>
                    💡 Skilled in developing secure, scalable applications using Python (Django, FastAPI, Flask) and Java.
                        Experienced in RESTful APIs, microservices architecture, cloud deployments, and database design.
                      Proficient in frontend technologies (React, JavaScript) and integrating ML models for automation and predictive insights.
                  </p>
                  
                  <p>
                    🎯 Demonstrated success in leading impactful Full Stack projects, increasing annual revenue by significant margins, 
                    and providing effective mentorship to development teams.
                  </p>
                  
                  <div className="tech-stack-section mt-4">
                    <h4 className="mb-3">🚀 Full Stack Tech Stack & Expertise</h4>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="tech-category mb-3">
                          <h6 className="tech-title">🐍 Python Frameworks</h6>
                          <div className="tech-badges">
                            <span className="badge badge-primary">Django</span>
                            <span className="badge badge-info">FastAPI</span>
                            <span className="badge badge-warning">Flask</span>
                            <span className="badge badge-success">Celery</span>
                          </div>
                        </div>
                        <div className="tech-category mb-3">
                          <h6 className="tech-title">☕ Java Frameworks</h6>
                          <div className="tech-badges">
                            <span className="badge badge-success">Spring Boot</span>
                            <span className="badge badge-primary">Spring Security</span>
                            <span className="badge badge-info">Hibernate</span>
                            <span className="badge badge-warning">Maven</span>
                          </div>
                        </div>
                        <div className="tech-category mb-3">
                          <h6 className="tech-title">🌐 Frontend</h6>
                          <div className="tech-badges">
                            <span className="badge badge-info">React.js</span>
                            <span className="badge badge-warning">JavaScript</span>
                            <span className="badge badge-primary">HTML5/CSS3</span>
                            <span className="badge badge-success">Bootstrap</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="tech-category mb-3">
                          <h6 className="tech-title">🗄️ Databases & Storage</h6>
                          <div className="tech-badges">
                            <span className="badge badge-primary">PostgreSQL</span>
                            <span className="badge badge-info">MongoDB</span>
                            <span className="badge badge-warning">Redis</span>
                            <span className="badge badge-success">MySQL</span>
                          </div>
                        </div>
                        <div className="tech-category mb-3">
                          <h6 className="tech-title">☁️ Cloud & DevOps</h6>
                          <div className="tech-badges">
                            <span className="badge badge-warning">AWS</span>
                            <span className="badge badge-info">Docker</span>
                            <span className="badge badge-primary">Kubernetes</span>
                            <span className="badge badge-success">GitHub Actions</span>
                          </div>
                        </div>
                        <div className="tech-category mb-3">
                          <h6 className="tech-title">🤖 ML & Data Tools</h6>
                          <div className="tech-badges">
                            <span className="badge badge-danger">Scikit-learn</span>
                            <span className="badge badge-info">Pandas</span>
                            <span className="badge badge-warning">TensorFlow</span>
                            <span className="badge badge-success">Jupyter</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="quick-facts mt-4">
                      <div className="row">
                        <div className="col-md-4">
                          <div className="fact-item">
                            <span className="fact-icon">🎓</span>
                            <span className="fact-text">MS Computer Science</span>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="fact-item">
                            <span className="fact-icon">🌍</span>
                            <span className="fact-text">Charlotte, NC USA</span>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="fact-item">
                            <span className="fact-icon">💻</span>
                            <span className="fact-text">Full Stack Engineer</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 