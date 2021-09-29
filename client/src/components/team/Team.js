import React, { useState, useEffect } from 'react';
import dummyImage from '../../images/face4.png';
import TeamCarousel from './TeamCarousel';
import Presidents from './Presidents';
import SocietyHeads from './SocietyHeads';
import axios from 'axios';

const Team = () => {
  let [data, setData] = useState(1);
  let baseUrl = 'https://acm-official-website.herokuapp.com/team';
  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setData(response.data[3]);
    });
  }, []);
  const presidentData = data && data['President'];
  const societyHeadData = data && data['SocietyHead'];
  const departmentHeadData = data && data['DepartmentHead'];
  return (
    <>
      <div className="team-page">
        <div className="team-page-headings-div">
          <h1 className="team-page-head">Meet the team</h1>
          <h3 className="team-page-subhead">
            The people who will help you in your journey!
          </h3>
        </div>
        {presidentData && <Presidents data={presidentData} />}
        {societyHeadData && <SocietyHeads data={societyHeadData} />}

        {/* <TeamCarousel /> */}

        <div className="department-heads">
          <h2 className="department-heads-heading">Department Heads</h2>
          {/* <div className="carousel">
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
                <img src={dummyImage} />
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
                <img src={dummyImage} />
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
                <img src={dummyImage} />
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
                <img src={dummyImage} />
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
                <img src={dummyImage} />
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
                <img src={dummyImage} />
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
          </div> */}
          {departmentHeadData && <TeamCarousel data={departmentHeadData} />}
        </div>
      </div>
    </>
  );
};

export default Team;
