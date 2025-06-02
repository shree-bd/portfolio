import React from 'react';

const Resume = ({ darkMode }) => {
  const experiences = [
    {
      date: "February 2024-Present",
      title: "Software Engineer II",
      company: "Ameriprise Financial | Charlotte, NC",
      description: "Leading financial firm managing wealth for 100M+ customers across the United States.",
      achievements: [
        "Developed secured and scalable applications with Python, leveraging multithreading, SQLAlchemy, Django ORM, and RESTful APIs",
        "Built high-performance microservices using FastAPI with async/await patterns, Pydantic data validation, and automatic OpenAPI documentation, reducing API response times by 40%",
        "Streamlined development of enterprise microservices using AWS Lambda, API Gateway, DynamoDB, S3, and IAM, significantly increasing annual revenue by 7%",
        "Implemented AWS infrastructure using Terraform, Kubernetes, and Docker, ensuring scalable deployment of cloud resources across AWS environments to enhance efficiency by 45%"
      ]
    },
    {
      date: "January 2023-December 2023",
      title: "Software Engineer",
      company: "Vanguard | Malvern, PA",
      description: "Leading investment management company serving millions of investors worldwide.",
      achievements: [
        "Engineered a customer storage solution with AWS DynamoDB and Spring Boot, leveraging GraphQL microservices to improve data indexing by 35%",
        "Automated data indexing with AWS Lambda, optimized database queries, and conducted performance testing to handle high-volume data with low latency and improve system scalability by 25%",
        "Implemented authentication and authorization in mobile apps using Spring Security, JWT, JUnit, and OAuth, ensuring 99.9% reliability"
      ]
    },
    {
      date: "March 2020-December 2021",
      title: "Software Engineer",
      company: "Dvara Solutions | Bangalore, India",
      description: "Data-driven digital marketing analytics and solutions company serving top 100 global brands.",
      achievements: [
        "Redesigned and implemented applications for managing customer loans and generating financial reports using Python, Django, PostgreSQL, Node.js, React, Redux, and jQuery, supporting $500M AUM and 4M+ customers",
        "Built distributed data processing pipelines using PySpark and Apache Spark to handle large-scale financial datasets, processing 10M+ transactions daily with improved performance and scalability",
        "Produced reusable web components, Django views, and models for user registration modules, and created RESTful APIs for low-cost application integration using JSON",
        "Developed an abstract API layer with Django REST Framework, object-oriented design, system design, and microservices, using Kafka to improve system responsiveness by 30%",
        "Implemented distributed computing solutions with Apache Spark, Hadoop ecosystem, and cloud-based data lakes for real-time analytics and batch processing of customer financial data"
      ]
    },
    {
      date: "August 2017-March 2020",
      title: "Software Engineer",
      company: "Cosmocrat Software Solutions | Noida, India",
      description: "Leading digital marketing firm managing diverse clients across the globe.",
      achievements: [
        "Developed full stack web applications with Java Spring Boot backend and React.js frontend, improving website performance and user engagement by 30%",
        "Built RESTful web services with rate limiting in Spring Boot and delivered 3 SaaS modules & 12 new features for Snapdeal, increasing user adoption by 35%",
        "Implemented backend APIs using Java, Spring Framework, and JPA for data persistence, while creating responsive frontend components with JavaScript, TypeScript, ReactJS, HTML, and CSS",
        "Optimized database performance by implementing MongoDB indexing for fast queries and normalized PostgreSQL schemas for data integrity, enhancing performance across application modules"
      ]
    },

  ];

  const education = [
    {
      date: "Graduated: December 2023",
      degree: "Master of Science in Computer Science",
      institution: "California State University, Fullerton | USA",
      details: [
        "GPA: 3.54/4.0",
        "Relevant Coursework: Advanced Software Engineering, Data Structures & Algorithms, Machine Learning, Database Systems, Cloud Computing, Software Architecture"
      ]
    },
    {
      date: "Graduated: May 2016",
      degree: "Bachelor of Technology (B.Tech.)",
      institution: "Galgotias University | India",
      details: [
        "GPA: 3.7/4.0",
        "Major: Computer Science & Engineering",
        "Focus: Software Development, Data Structures, Object-Oriented Programming"
      ]
    }
  ];

  return (
    <section className="ftco-section ftco-no-pb" id="resume-section">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-10 heading-section text-center ftco-animate">
            <h1 className="big big-2">Resume</h1>
            <h2 className="mb-4">Resume</h2>
            <p>
              🚀 Experienced Full-Stack Software Engineer with 5+ years of experience and MS in Computer Science 
              from California State University. Currently driving innovation at Ameriprise Financial, developing 
              enterprise-scale applications that serve 100M+ customers. Proven expertise in Java, Python, React, AWS, and AI/ML 
              with a track record of increasing revenue and system efficiency.
            </p>
          </div>
        </div>

        <div className="row">
          <h1 className="big-4">Experience</h1>
          <div className="underline"></div>
        </div>
        <br />
        
        {/* Experience Grid */}
        {experiences.map((exp, index) => (
          <div key={index} className={index % 2 === 0 ? "row" : "row"}>
            {index % 2 === 0 && (
              <>
                <div className="col-md-6">
                  <div className="resume-wrap ftco-animate">
                    <span className="date">{exp.date}</span>
                    <h2>{exp.title}</h2>
                    <span className="position">{exp.company}</span>
                    <p className="mt-4">
                      {exp.description}
                      <ul>
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </p>
                  </div>
                </div>
                {experiences[index + 1] && (
                  <div className="col-md-6">
                    <div className="resume-wrap ftco-animate">
                      <span className="date">{experiences[index + 1].date}</span>
                      <h2>{experiences[index + 1].title}</h2>
                      <span className="position">{experiences[index + 1].company}</span>
                      <p className="mt-4">
                        {experiences[index + 1].description}
                        <ul>
                          {experiences[index + 1].achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </p>
                    </div>
                  </div>
                )}
              </>
            )}
            {index % 2 === 0 && index < experiences.length - 1 && (
              <>
                <br />
                <br />
              </>
            )}
          </div>
        ))}

        <br />
        <br />

        <div className="row">
          <h1 className="big-4">Education</h1>
          <div className="underline"></div>
        </div>
        <br />
        
        <div className="row">
          {education.map((edu, index) => (
            <div key={index} className="col-md-6">
              <div className="resume-wrap ftco-animate">
                <h2>{edu.degree}</h2>
                <span className="position">{edu.institution}</span>
                <p className="mt-4">
                  {edu.details.map((detail, i) => (
                    <span key={i}>
                      <strong>{detail}</strong><br />
                    </span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-md-6 text-center ftco-animate">
            <p>
              <a href="https://drive.google.com/drive/u/0/folders/1rTiDighXCppaE5iYGLkR2qGf98MQxgsO" target="_blank" rel="noopener noreferrer" className="btn btn-primary py-4 px-5">Request CV</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume; 