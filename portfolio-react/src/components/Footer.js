import React from 'react';

const Footer = ({ darkMode }) => {
  return (
    <footer className="ftco-footer ftco-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <p>
              Copyright &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
              <i className="icon-heart color-danger" aria-hidden="true"></i> by{' '}
              <a href="https://github.com/shree-bd" target="_blank" rel="noopener noreferrer">
                Shridhar Bhardwaj
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 