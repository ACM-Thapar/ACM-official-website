import React from 'react';
import landscape from '../../images/landscape.jpg';

const Team = () => {
  return (
    <div>
      <div className="team-page-headings-div">
        <h1 className="team-page-head">Meet the team</h1>
        <h3 className="team-page-subhead">
          The people who will help you in your journey!
        </h3>
        <h3 className="team-page-subhead">
          <a href="#presidents">
            <i className="fa fa-caret-down fa-5x" />
          </a>
        </h3>
      </div>
      <div className="presidents">
        <a name="presidents" />
        <h2 className="president-heading">Presidents</h2>
        <div className="president-img-div">
          <img src={landscape} className="president-img" />
          <p className="position">Random Position</p>
          <p className="name">Random Name</p>
          <p>
            <i className="fa fa-github" />
            <i className="fa fa-linkedin" />
            <i className="fa fa-twitter" />
          </p>
        </div>
        <div className="president-img-div">
          <img src={landscape} className="president-img" />
          <p className="position">Random Position</p>
          <p className="name">Random Name</p>
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
          <img src={landscape} className="society-heads-img" />
          <p className="position">Random Position</p>
          <p className="name">Random Name</p>
          <p>
            <i className="fa fa-github" />
            <i className="fa fa-linkedin" />
            <i className="fa fa-twitter" />
          </p>
        </div>
        <div className="society-heads-img-div">
          <img src={landscape} className="society-heads-img" />
          <p className="position">Random Position</p>
          <p className="name">Random Name</p>
          <p>
            <i className="fa fa-github" />
            <i className="fa fa-linkedin" />
            <i className="fa fa-twitter" />
          </p>
        </div>
        <div className="society-heads-img-div">
          <img src={landscape} className="society-heads-img" />
          <p className="position">Random Position</p>
          <p className="name">Random Name</p>
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
              <img src={landscape} />
              <div className="carousel-credentials">
                <p className="position">Random Position</p>
                <p className="name">Random Name</p>
                <p>
                  <i className="fa fa-github" />
                  <i className="fa fa-linkedin" />
                  <i className="fa fa-twitter" />
                </p>
              </div>
            </div>
            <div className="slick-slide">
              <img src={landscape} />
              <div className="carousel-credentials">
                <p className="position">Random Position</p>
                <p className="name">Random Name</p>
                <p>
                  <i className="fa fa-github" />
                  <i className="fa fa-linkedin" />
                  <i className="fa fa-twitter" />
                </p>
              </div>
            </div>
            <div className="slick-slide">
              <img src={landscape} />
              <div className="carousel-credentials">
                <p className="position">Random Position</p>
                <p className="name">Random Name</p>
                <p>
                  <i className="fa fa-github" />
                  <i className="fa fa-linkedin" />
                  <i className="fa fa-twitter" />
                </p>
              </div>
            </div>
            <div className="slick-slide">
              <img src={landscape} />
              <div className="carousel-credentials">
                <p className="position">Random Position</p>
                <p className="name">Random Name</p>
                <p>
                  <i className="fa fa-github" />
                  <i className="fa fa-linkedin" />
                  <i className="fa fa-twitter" />
                </p>
              </div>
            </div>
            <div className="slick-slide">
              <img src={landscape} />
              <div className="carousel-credentials">
                <p className="position">Random Position</p>
                <p className="name">Random Name</p>
                <p>
                  <i className="fa fa-github" />
                  <i className="fa fa-linkedin" />
                  <i className="fa fa-twitter" />
                </p>
              </div>
            </div>
            <div className="slick-slide">
              <img src={landscape} />
              <div className="carousel-credentials">
                <p className="position">Random Position</p>
                <p className="name">Random Name</p>
                <p>
                  <i className="fa fa-github" />
                  <i className="fa fa-linkedin" />
                  <i className="fa fa-twitter" />
                </p>
              </div>
            </div>
            <div className="slick-slide">
              <img src={landscape} />
              <div className="carousel-credentials">
                <p className="position">Random Position</p>
                <p className="name">Random Name</p>
                <p>
                  <i className="fa fa-github" />
                  <i className="fa fa-linkedin" />
                  <i className="fa fa-twitter" />
                </p>
              </div>
            </div>
            <div className="slick-slide" id="center_on_me">
              <img src={landscape} />
              <div className="carousel-credentials">
                <p className="position">Random Position</p>
                <p className="name">Random Name</p>
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
  );
};

export default Team;
