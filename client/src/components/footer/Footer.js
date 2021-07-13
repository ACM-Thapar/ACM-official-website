import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <div className="social-icons">
                <a
                  className="social-icon social-icon--github"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer">
                  <i className="fa fa-github" />
                  <div className="tooltip">Github</div>
                </a>
                <a
                  className="social-icon social-icon--twitter"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer">
                  <i className="fa fa-twitter" />
                  <div className="tooltip">Twitter</div>
                </a>
                <a
                  className="social-icon social-icon--dribbble"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer">
                  <i className="fa fa-dribbble" />
                  <div className="tooltip">Dribbble</div>
                </a>
                <a
                  className="social-icon social-icon--instagram"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer">
                  <i className="fa fa-instagram" />
                  <div className="tooltip">Instagram</div>
                </a>
                <a
                  className="social-icon social-icon--linkedin"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer">
                  <i className="fa fa-linkedin" />
                  <div className="tooltip">LinkedIn</div>
                </a>
                <a
                  className="social-icon social-icon--facebook"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer">
                  <i className="fa fa-facebook" />
                  <div className="tooltip">Facebook</div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <p className="copyright" style={{ color: '#ffffff' }}>
                <i className="fa fa-copyright" style={{ color: '#ffffff' }} />
                Copyright 2020 || Designed by ACM Thapar
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
