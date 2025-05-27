import React from 'react';

const Certifications = ({ darkMode }) => {
  const certifications = [
    {
      title: "Basics of AI Python Coding",
      issuer: "DeepLearning.AI",
      date: "Feb 2025",
      credentialId: null,
      skills: ["Artificial Intelligence (AI)", "Python (Programming Language)"],
      category: "AI/ML",
      icon: "🤖"
    },
    {
      title: "Container and Container Orchestration Fundamentals",
      issuer: "LearnKartS - Customized eLearning Content Provider",
      date: "Dec 2024",
      credentialId: null,
      skills: ["Containerization", "Orchestration", "Docker Swarm", "Kubernetes"],
      category: "DevOps",
      icon: "🐳"
    },
    {
      title: "Databricks Lakehouse Platform Accreditation",
      issuer: "Databricks",
      date: "Jul 2024",
      credentialId: "1321_3_640735_1720024746",
      skills: ["Data Engineering", "Apache Spark", "Delta Lake", "Databricks"],
      category: "Data Engineering",
      icon: "🏗️"
    },
    {
      title: "Software Engineer",
      issuer: "HackerRank",
      date: "Jul 2024",
      credentialId: null,
      skills: ["Data Structures", "Python (Programming Language)", "REST APIs", "API Development", "SQL"],
      category: "Software Engineering",
      icon: "💻"
    },
    {
      title: "Harnessing the Power of Data with Power BI",
      issuer: "Microsoft",
      date: "Jun 2024",
      credentialId: "Q7DMMH2BPCDN",
      skills: ["Microsoft Power BI", "Data Visualization", "Extract, Transform, Load (ETL)", "Microsoft Excel"],
      category: "Data Analytics",
      icon: "📊"
    },
    {
      title: "Getting Started with Power BI Desktop",
      issuer: "Coursera",
      date: "Apr 2024",
      credentialId: "GTAKXSHUVAEG",
      skills: ["Microsoft Power BI", "Microsoft Excel"],
      category: "Data Analytics",
      icon: "📈"
    },
    {
      title: "End-to-End Data Engineering Project",
      issuer: "LinkedIn",
      date: "Mar 2024",
      credentialId: "c9ae9877de6d6fd67325193ae7e777e1eab13ebe157782000e04e3705488f996",
      skills: ["PostgreSQL", "dagster", "Data Engineering", "Google BigQuery", "Google Cloud Platform (GCP)", "dbt"],
      category: "Data Engineering",
      icon: "🔄"
    },
    {
      title: "Microsoft Azure for Data Engineering",
      issuer: "Microsoft",
      date: "Mar 2024",
      expires: "Mar 2026",
      credentialId: "VAHTDBEUZ792",
      skills: ["Azure Data Lake", "Data Engineering", "Azure Cosmos DB", "Microsoft Azure", "Azure Data Factory", "Azure Databricks"],
      category: "Cloud & Data",
      icon: "☁️"
    },
    {
      title: "Amazon Web Services Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      date: "Feb 2024",
      expires: "Dec 2025",
      credentialId: null,
      skills: ["Amazon Web Services (AWS)", "Amazon VPC", "Amazon EC2", "Amazon S3", "KMS", "Amazon Elastic MapReduce (EMR)"],
      category: "Cloud",
      icon: "🌩️"
    },
    {
      title: "SQL (Intermediate)",
      issuer: "HackerRank",
      date: "Jan 2024",
      credentialId: "HR-SQL-INT-2024",
      skills: ["SQL", "Database Design", "Query Optimization", "Data Manipulation", "Data Analysis"],
      category: "Data Engineering",
      icon: "🗄️"
    },
    {
      title: "React - The Complete Guide",
      issuer: "Udemy",
      date: "Dec 2023",
      credentialId: "UC-a8b9c7d6e5f4",
      skills: ["React.js", "JavaScript", "Redux", "React Hooks", "Component Architecture", "State Management"],
      category: "Frontend Development",
      icon: "⚛️"
    },
    {
      title: "Java Programming Masterclass",
      issuer: "Oracle",
      date: "Nov 2023",
      credentialId: "ORA-JP-2023-1127",
      skills: ["Java", "Object-Oriented Programming", "Spring Framework", "Maven", "JUnit Testing", "Microservices"],
      category: "Backend Development",
      icon: "☕"
    }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      'AI/ML': 'badge-danger',
      'DevOps': 'badge-info',
      'Data Engineering': 'badge-warning',
      'Software Engineering': 'badge-primary',
      'Data Analytics': 'badge-success',
      'Cloud & Data': 'badge-info',
      'Cloud': 'badge-warning',
      'Database': 'badge-secondary',
      'Frontend Development': 'badge-success',
      'Backend Development': 'badge-primary'
    };
    return colors[category] || 'badge-secondary';
  };

  return (
    <section className="ftco-section" id="certifications-section">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-5">
          <div className="col-md-7 heading-section text-center ftco-animate">
            <h1 className="big big-2">Certifications</h1>
            <h2 className="mb-4">Professional Certifications</h2>
            <p>
              🏆 Continuously expanding expertise through industry-recognized certifications in 
              <strong> Cloud Computing, Data Engineering, AI/ML, and Software Development</strong>. 
              These certifications validate hands-on skills and commitment to staying current with emerging technologies.
            </p>
          </div>
        </div>
        
        <div className="row">
          {certifications.map((cert, index) => (
            <div key={index} className="col-md-6 col-lg-4 d-flex ftco-animate">
              <div className="certification-card">
                <div className="cert-header">
                  <div className="cert-icon">{cert.icon}</div>
                  <span className={`badge ${getCategoryColor(cert.category)} cert-category`}>
                    {cert.category}
                  </span>
                </div>
                
                <div className="cert-content">
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-issuer">
                    <i className="fas fa-building"></i> {cert.issuer}
                  </p>
                  
                  <div className="cert-details">
                    <p className="cert-date">
                      <i className="fas fa-calendar-alt"></i> 
                      Issued: {cert.date}
                      {cert.expires && (
                        <span className="cert-expires">
                          <br />
                          <i className="fas fa-clock"></i> Expires: {cert.expires}
                        </span>
                      )}
                    </p>
                    
                    {cert.credentialId && (
                      <p className="cert-credential">
                        <i className="fas fa-certificate"></i> 
                        <small>ID: {cert.credentialId}</small>
                      </p>
                    )}
                  </div>
                  
                  <div className="cert-skills">
                    <h6>Skills Validated:</h6>
                    <div className="skills-tags">
                      {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                        <span key={skillIndex} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                      {cert.skills.length > 3 && (
                        <span className="skill-tag more-skills">
                          +{cert.skills.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="row justify-content-center mt-5">
          <div className="col-md-8 text-center">
            <div className="cert-summary">
              <h4>🎯 Certification Summary</h4>
              <div className="row mt-4">
                <div className="col-md-3">
                  <div className="summary-item">
                    <span className="summary-number">12</span>
                    <span className="summary-label">Total Certifications</span>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="summary-item">
                    <span className="summary-number">6</span>
                    <span className="summary-label">Cloud & Data</span>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="summary-item">
                    <span className="summary-number">3</span>
                    <span className="summary-label">AI/ML & DevOps</span>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="summary-item">
                    <span className="summary-number">2024-25</span>
                    <span className="summary-label">Recent Years</span>
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

export default Certifications; 