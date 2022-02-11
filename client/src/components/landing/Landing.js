import React from 'react';
import Ellipse from '../../images/Ellipse.svg';
import Group1 from '../../images/Group1.svg';
import src from '../../images/Programmer-amico.png';

const Landing = () => {
  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 whitecircle" style={{ paddingLeft: '0%' }}>
              <img
                src={Ellipse}
                className="whitebg"
                align="left"
                alt="White Circle"
              />
              <h1 className="ACMT">ACM THAPAR</h1>
              <p className="maintext">
                ACM is the world’s largest computing society with the motive of
                “Advancing Computing as a science and profession” At Thapar ACM
                Student Chapter, we aim towards the holistic development of our
                members by collaborating and engaging in a plethora of technical
                activities and projects where brainstorming and strategic
                planning is the primary key to excel.
              </p>
              <button className="learn-more">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow" />
                </span>
                <span className="button-text">Learn More</span>
              </button>
            </div>
            <div className="col-md-6 bluecircle" style={{ paddingRight: '0%' }}>
              <img
                className="bluebg"
                src={Group1}
                align="right"
                alt="Blue circle"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="landpagetwo">
        <div className="container">
          <div className="row">
            <br />
            <br />
            <h1 className="whatwedo">
              <br />
              What do we do
            </h1>
          </div>
          <div className="row">
            <div className="col-md-4">
              <h3 className="whatwedopoints">Classes</h3>
              <p>
                We provide classes to our junior members particularly in the
                field of Data Structures, Algorithms and Competitive
                Programming.
              </p>
              <h3 className="whatwedopoints">Events</h3>
              <p>
                At ACM Thapar, we host a variety of such events to bring
                together like-minded coders to collaborate, grow and have fun!.
                We believe that youth encompassed with appropriate technology
                holds the potential to revolutionize the world we perceive
                today.
              </p>
            </div>
            <div className="col-md-4">
              <h3 className="whatwedopoints">Bootcamp</h3>
              <p>
                We have bootcamps in the fields of web development and app
                development to upskill our members.
              </p>
              <h3 className="whatwedopoints">Projects</h3>
              <p>
                Projects serve as the platform for transforming knowledge into
                ideas. While enhancing various skills and management techniques
                in our actions and lives. Project-based learning inculcates
                competencies to go beyond subject knowledge, prepare and
                challenge the existing methods.
              </p>
            </div>
            <div className="col-md-4">
              <img src={src} className="amico-img" />
            </div>
          </div>
        </div>
      </section>
      <section className="membership">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h1 className="membershiph1">ACM Membership</h1>
              <p className="membershiptext">
                ACM offers the resources, access and tools to invent the
                future.No one has a larger global network of professional peers.
              </p>
              <button type="button" className="btn learnmorenew">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  className="bi bi-arrow-right"
                  fill="#1b98e0"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
                <a
                  href="https://www.acm.org/membership"
                  target="_blank"
                  className="learnmorenew">
                  {' Learn More'}
                </a>
              </button>
              <br />
              <br />
              <br />
              <br />
            </div>
            <div className="col-md-4">
              <p className="membershiptextnew">
                No one has more exclusive content. No one presents more
                forward-looking events. Or confers more prestigious awards. Or
                provides a more comprehensive learning center.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
