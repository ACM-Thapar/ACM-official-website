import React from 'react';

import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

import landscape from '../../images/landscape.jpg';

const Team = () => {
  return (
    <div>
      <Navbar />
      <div className="team-page">
  <div className="team-page-headings-div">
    <h1 className="team-page-head">Meet the team</h1>
    <h3 className="team-page-subhead">
      The people who will help you in your journey!
    </h3>
  </div>
  <div className="presidents">
    <a name="presidents" />
    <h2 className="president-heading">Presidents</h2>
    <div className="president-img-div">
      <img src="https://raw.githubusercontent.com/ACM-Thapar/ACM-official-website/master/theme/images/face4.png?token=AEFQEDDGLPEFFX6MFRVJTOLA5RXLE" className="president-img" />
      <p className="position">President</p>
      <p className="name">Akhil Gupta</p>
      <p>
        <i className="fa fa-github" /><i className="fa fa-linkedin" /><i className="fa fa-twitter" />
      </p>
    </div>
    <div className="president-img-div">
      <img src="./images/face6.png" className="president-img" />
      <p className="position">President</p>
      <p className="name">Anant Chaudhri</p>
      <p>
        <i className="fa fa-github" /><i className="fa fa-linkedin" /><i className="fa fa-twitter" />
      </p>
    </div>
  </div>
  <div className="society-heads">
    <h2 className="society-heads-heading">Society Heads</h2>
    <div className="society-heads-img-div">
      <img src="./images/face1.png" className="society-heads-img" />
      <p className="position">General secretary</p>
      <p className="name">Gopal Joshi</p>
      <p>
        <i className="fa fa-github" /><i className="fa fa-linkedin" /><i className="fa fa-twitter" />
      </p>
    </div>
    <div className="society-heads-img-div">
      <img src="./images/face2.png" className="society-heads-img" />
      <p className="position">Academic Affairs</p>
      <p className="name">Anjali Nagarkar</p>
      <p>
        <i className="fa fa-github" /><i className="fa fa-linkedin" /><i className="fa fa-twitter" />
      </p>
    </div>
    <div className="society-heads-img-div">
      <img src="./images/face3.png" className="society-heads-img" />
      <p className="position">External Affairs</p>
      <p className="name">Karthik Jain</p>
      <p>
        <i className="fa fa-github" /><i className="fa fa-linkedin" /><i className="fa fa-twitter" />
      </p>
    </div>
  </div>
  <div className="department-heads">
    <h2 className="department-heads-heading">Department Heads</h2>
    <div className="carousel">
      <div className="slider slider-nav">
        <div className="slick-slide">
          <img src="./images/face3.png" />
          <div className="carousel-credentials">
            <p className="position">Tech Head</p>
            <p className="name">Mohinder Das</p>
            <p>
              <i className="fa fa-github" /><i className="fa fa-linkedin" /><i className="fa fa-twitter" />
            </p>
          </div>
        </div>
        <div className="slick-slide">
          <img src="./images/face1.png" />
          <div className="carousel-credentials">
            <p className="position">Jr. Tech Head</p>
            <p className="name">Sanjana Gadhavi</p>
            <p>
              <i className="fa fa-github" /><i className="fa fa-linkedin" /><i className="fa fa-twitter" />
            </p>
          </div>
        </div>
        <div className="slick-slide">
          <img src="./images/face2.png" />
          <div className="carousel-credentials">
            <p className="position">PR Head</p>
            <p className="name">Meera D'Cruze</p>
            <p>
              <i className="fa fa-github" /><i className="fa fa-linkedin" /><i className="fa fa-twitter" />
            </p>
          </div>
        </div>
        <div className="slick-slide">
          <img src="./images/face4.png" />
          <div className="carousel-credentials">
            <p className="position">Finance Head</p>
            <p className="name">Shivali Bachchan</p>
            <p>
              <i className="fa fa-github" /><i className="fa fa-linkedin" /><i className="fa fa-twitter" />
            </p>
          </div>
        </div>
        <div className="slick-slide">
          <img src="./images/face6.png" />
          <div className="carousel-credentials">
            <p className="position">Marketing Head</p>
            <p className="name">Diksha Jain</p>
            <p>
              <i className="fa fa-github" /><i className="fa fa-linkedin" /><i className="fa fa-twitter" />
            </p>
          </div>
        </div>
        <div className="slick-slide">
          <img src="./images/face3.png" />
          <div className="carousel-credentials">
            <p className="position">Secretary</p>
            <p className="name">Ishani Rao</p>
            <p>
              <i className="fa fa-github" /><i className="fa fa-linkedin" /><i className="fa fa-twitter" />
            </p>
          </div>
        </div>
        <div className="slick-slide">
          <img src="./images/face2.png" />
          <div className="carousel-credentials">
            <p className="position">Coordinator</p>
            <p className="name">Jayant Gupta</p>
            <p>
              <i className="fa fa-github" /><i className="fa fa-linkedin" /><i className="fa fa-twitter" />
            </p>
          </div>
        </div>
        <div className="slick-slide" id="center_on_me">
          <img src="./images/face4.png" />
          <div className="carousel-credentials">
            <p className="position">Content head</p>
            <p className="name">Prashant Misra</p>
            <p>
              <i className="fa fa-github" /><i className="fa fa-linkedin" /><i className="fa fa-twitter" />
            </p>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <div className="social-icons">
              <a className="social-icon social-icon--github" href="#" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-github" />
                <div className="tooltip">Github</div>
              </a>
              <a className="social-icon social-icon--twitter" href="#" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-twitter" />
                <div className="tooltip">Twitter</div>
              </a>
              <a className="social-icon social-icon--dribbble" href="#" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-dribbble" />
                <div className="tooltip">Dribbble</div>
              </a>
              <a className="social-icon social-icon--instagram" href="#" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-instagram" />
                <div className="tooltip">Instagram</div>
              </a>
              <a className="social-icon social-icon--linkedin" href="#" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-linkedin" />
                <div className="tooltip">LinkedIn</div>
              </a>
              <a className="social-icon social-icon--facebook" href="#" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-facebook" />
                <div className="tooltip">Facebook</div>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <p className="copyright" style={{color: '#ffffff'}}>
              <i className="fa fa-copyright" style={{color: '#ffffff'}} />
              Copyright 2020 || Designed by ACM Thapar
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</div>
</div>


  );
};

export default Team;
