import React from 'react';
import Ellipse from '../../images/Ellipse.svg';
import Group1 from '../../images/Group1.svg';
import src from '../../images/Programmer-amico.png'

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
                ACM offers the resources, access and tools to invent the future.
                No one has a larger global network of professional peers. No one
                has more exclusive content. No one presents more forward-looking
                events. Or confers more prestigious awards. Or provides a more
                comprehensive learning center.
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
                We offer the resources, access and tools to invent the world.
              </p>
              <h3 className="whatwedopoints">Bootcamp</h3>
              <p>
                ACM offers the resources, access and tools to invent the future.
              </p>
            </div>
            <div className="col-md-4">
              <h3 className="whatwedopoints">Events</h3>
              <p>
                We offer the resources, access and tools to invent the world.
              </p>
              <h3 className="whatwedopoints">Projects</h3>
              <p>
                ACM offers the resources, access and tools to invent the future.
              </p>
            </div>
            <div className="col-md-4">
              <img src={src} className='amico-img'/>
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
                <a href="#" className="learnmorenew">
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
