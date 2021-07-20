import React from 'react';
import dummyImage from '../../images/face4.png';

const Team = () => {
  return (
    <div>
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
            <img src={dummyImage} className="president-img" />
            <p className="position">President</p>
            <p className="name">Akhil Gupta</p>
            <p>
              <i className="fa fa-github" />
              <i className="fa fa-linkedin" />
              <i className="fa fa-twitter" />
            </p>
          </div>
          <div className="president-img-div">
            <img src="./images/face6.png" className="president-img" />
            <p className="position">President</p>
            <p className="name">Anant Chaudhri</p>
            <p>
              <i className="fa fa-github" />
              <i className="fa fa-linkedin" />
              <i className="fa fa-twitter" />
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
              <i className="fa fa-github" />
              <i className="fa fa-linkedin" />
              <i className="fa fa-twitter" />
            </p>
          </div>
          <div className="society-heads-img-div">
            <img src="./images/face2.png" className="society-heads-img" />
            <p className="position">Academic Affairs</p>
            <p className="name">Anjali Nagarkar</p>
            <p>
              <i className="fa fa-github" />
              <i className="fa fa-linkedin" />
              <i className="fa fa-twitter" />
            </p>
          </div>
          <div className="society-heads-img-div">
            <img src="./images/face3.png" className="society-heads-img" />
            <p className="position">External Affairs</p>
            <p className="name">Karthik Jain</p>
            <p>
              <i className="fa fa-github" />
              <i className="fa fa-linkedin" />
              <i className="fa fa-twitter" />
            </p>
          </div>
        </div>
        <div className="department-heads">
          <h2 className="department-heads-heading">Department Heads</h2>
          <div className="carousel">
            <div className="slider slider-nav">
              <div className="slick-slide">
                <img src={dummyImage} />
                <div className="carousel-credentials">
                  <p className="position">Tech Head</p>
                  <p className="name">Mohinder Das</p>
                  <p>
                    <i className="fa fa-github" />
                    <i className="fa fa-linkedin" />
                    <i className="fa fa-twitter" />
                  </p>
                </div>
              </div>
              <div className="slick-slide">
                <img src={dummyImage} />
                <div className="carousel-credentials">
                  <p className="position">Jr. Tech Head</p>
                  <p className="name">Sanjana Gadhavi</p>
                  <p>
                    <i className="fa fa-github" />
                    <i className="fa fa-linkedin" />
                    <i className="fa fa-twitter" />
                  </p>
                </div>
              </div>
              <div className="slick-slide">
                <img src="./images/face2.png" />
                <div className="carousel-credentials">
                  <p className="position">PR Head</p>
                  <p className="name">Meera D'Cruze</p>
                  <p>
                    <i className="fa fa-github" />
                    <i className="fa fa-linkedin" />
                    <i className="fa fa-twitter" />
                  </p>
                </div>
              </div>
              <div className="slick-slide">
                <img src="./images/face4.png" />
                <div className="carousel-credentials">
                  <p className="position">Finance Head</p>
                  <p className="name">Shivali Bachchan</p>
                  <p>
                    <i className="fa fa-github" />
                    <i className="fa fa-linkedin" />
                    <i className="fa fa-twitter" />
                  </p>
                </div>
              </div>
              <div className="slick-slide">
                <img src="./images/face6.png" />
                <div className="carousel-credentials">
                  <p className="position">Marketing Head</p>
                  <p className="name">Diksha Jain</p>
                  <p>
                    <i className="fa fa-github" />
                    <i className="fa fa-linkedin" />
                    <i className="fa fa-twitter" />
                  </p>
                </div>
              </div>
              <div className="slick-slide">
                <img src="./images/face3.png" />
                <div className="carousel-credentials">
                  <p className="position">Secretary</p>
                  <p className="name">Ishani Rao</p>
                  <p>
                    <i className="fa fa-github" />
                    <i className="fa fa-linkedin" />
                    <i className="fa fa-twitter" />
                  </p>
                </div>
              </div>
              <div className="slick-slide">
                <img src="./images/face2.png" />
                <div className="carousel-credentials">
                  <p className="position">Coordinator</p>
                  <p className="name">Jayant Gupta</p>
                  <p>
                    <i className="fa fa-github" />
                    <i className="fa fa-linkedin" />
                    <i className="fa fa-twitter" />
                  </p>
                </div>
              </div>
              <div className="slick-slide" id="center_on_me">
                <img src="./images/face4.png" />
                <div className="carousel-credentials">
                  <p className="position">Content head</p>
                  <p className="name">Prashant Misra</p>
                  <p>
                    <i className="fa fa-github" />
                    <i className="fa fa-linkedin" />
                    <i className="fa fa-twitter" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
