import React from 'react';
import contactImage from '../assets/images/about-me.png';

const Contact = ({ darkMode }) => {
  return (
    <section className="ftco-section contact-section ftco-no-pb" id="contact-section">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section text-center ftco-animate">
            <h1 className="big big-2">Contact</h1>
            <h2 className="mb-4">Contact Me</h2>
            <p>
              🚀 Ready to collaborate on your next project? Let's connect and discuss how I can help 
              bring your ideas to life with cutting-edge technology solutions.
            </p>
          </div>
        </div>

        <div className="row justify-content-center mb-5">
          <div className="col-md-7 ftco-animate text-center">
            <h2>Have a<span> Question? </span> <a href="https://github.com/shree-bd" className="btn btn-primary py-3 px-5">Click Here</a></h2>
          </div>
        </div>
        
        <div className="row justify-content-center mb-5">
          <div className="col-md-8 text-center">
            <ul className="ftco-footer-social list-unstyled d-flex justify-content-center align-items-center mb-0">
              <li className="ftco-animate normal-txt">Find me on </li>
              <li className="ftco-animate"><a href="https://www.linkedin.com/in/shri007/"><i className="fab fa-linkedin"></i></a></li>
              <li className="ftco-animate"><a href="https://github.com/shree-bd"><i className="fab fa-github"></i></a></li>
              <li className="ftco-animate"><a href="mailto:shridharbhardwaj@gmail.com"><i className="fas fa-envelope"></i></a></li>
            </ul>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <form action="#" className="bg-light p-4 p-md-5 contact-form">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Your Email" />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Subject" />
              </div>
              <div className="form-group">
                <textarea name="" id="" cols="30" rows="7" className="form-control" placeholder="Message"></textarea>
              </div>
              <div className="form-group text-center">
                <input type="submit" value="Send Message" className="btn btn-primary py-3 px-5" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 