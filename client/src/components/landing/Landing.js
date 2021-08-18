import React from 'react';
import Ellipse from '../../images/Ellipse.svg';
import Group1 from '../../images/Group1.svg';

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
              <svg
                className="svg think"
                width={540}
                height="565.71424"
                viewBox="0 0 580 800">
                <path
                  className="k4"
                  style={{
                    fill: 'none',
                    fillRule: 'evenodd',
                    stroke: '#df871b',
                    strokeWidth: 80,
                    strokeLinecap: 'round',
                    strokeLinejoin: 'miter',
                    strokeMiterlimit: 4,
                    strokeOpacity: 1,
                  }}
                  d="m 275.924,699.49118 54.75863,60.10532"
                />
                <g className="isolate">
                  <path
                    className="blend t1"
                    style={{
                      opacity: 1,
                      fill: '#dd5d20',
                      fillOpacity: 1,
                      fillRule: 'evenodd',
                      stroke: '#dd5d20',
                      strokeWidth: '79.81949615',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'miter',
                      strokeMiterlimit: 4,
                      strokeOpacity: 1,
                    }}
                    d="m 215.47816,252.84847 115.22634,0"
                  />
                  <path
                    className="blend t2"
                    d="m 273.09133,252.65768 0,115.22634"
                    style={{
                      display: 'inline',
                      opacity: 1,
                      fill: '#dd5d20',
                      fillOpacity: 1,
                      fillRule: 'evenodd',
                      stroke: '#0b9444',
                      strokeWidth: '79.81949615',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'miter',
                      strokeMiterlimit: 4,
                      strokeOpacity: 1,
                    }}
                  />
                  <path
                    className="blend h1"
                    style={{
                      display: 'inline',
                      opacity: 1,
                      fill: '#1f91ac',
                      fillOpacity: 1,
                      fillRule: 'evenodd',
                      stroke: '#1f91ac',
                      strokeWidth: '79.81949615',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'miter',
                      strokeMiterlimit: 4,
                      strokeOpacity: 1,
                    }}
                    d="m 410.71374,252.65768 0,115.22634"
                  />
                  <path
                    className="blend h2"
                    d="m 410.47816,310.44844 115.22634,0"
                    style={{
                      opacity: 1,
                      fill: '#dd5d20',
                      fillOpacity: 1,
                      fillRule: 'evenodd',
                      stroke: '#df871b',
                      strokeWidth: '79.81949615',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'miter',
                      strokeMiterlimit: 4,
                      strokeOpacity: 1,
                    }}
                  />
                  <path
                    className="blend i1"
                    d="m 215.47816,448.64847 115.22634,0"
                    style={{
                      opacity: 1,
                      fill: '#dd5d20',
                      fillOpacity: 1,
                      fillRule: 'evenodd',
                      stroke: '#dd5d20',
                      strokeWidth: 80,
                      strokeLinecap: 'round',
                      strokeLinejoin: 'miter',
                      strokeMiterlimit: 4,
                      strokeOpacity: 1,
                    }}
                  />
                  <path
                    className="blend i2"
                    style={{
                      opacity: 1,
                      fill: '#dd5d20',
                      fillOpacity: 1,
                      fillRule: 'evenodd',
                      stroke: '#dd5d20',
                      strokeWidth: 80,
                      strokeLinecap: 'round',
                      strokeLinejoin: 'miter',
                      strokeMiterlimit: 4,
                      strokeOpacity: 1,
                    }}
                    d="m 215.47816,563.85818 115.22634,0"
                  />
                  <path
                    className="blend i3"
                    style={{
                      display: 'inline',
                      opacity: 1,
                      fill: '#dd5d20',
                      fillOpacity: 1,
                      fillRule: 'evenodd',
                      stroke: '#1f91ac',
                      strokeWidth: 80,
                      strokeLinecap: 'round',
                      strokeLinejoin: 'miter',
                      strokeMiterlimit: 4,
                      strokeOpacity: 1,
                    }}
                    d="m 273.09133,448.56614 0,115.22634"
                  />
                  <path
                    className="blend n1"
                    d="m 410.71374,448.36614 0,115.22634"
                    style={{
                      display: 'inline',
                      opacity: 1,
                      fill: '#1f91ac',
                      fillOpacity: 1,
                      fillRule: 'evenodd',
                      stroke: '#da3931',
                      strokeWidth: 80,
                      strokeLinecap: 'round',
                      strokeLinejoin: 'miter',
                      strokeMiterlimit: 4,
                      strokeOpacity: 1,
                    }}
                  />
                  <path
                    className="blend n2"
                    style={{
                      display: 'inline',
                      opacity: 1,
                      fill: '#1f91ac',
                      fillOpacity: 1,
                      fillRule: 'evenodd',
                      stroke: '#da3931',
                      strokeWidth: 80,
                      strokeLinecap: 'round',
                      strokeLinejoin: 'miter',
                      strokeMiterlimit: 4,
                      strokeOpacity: 1,
                    }}
                    d="m 526.004,448.36614 0,115.22634"
                  />
                  <path
                    className="blend n3"
                    style={{
                      fill: 'none',
                      fillRule: 'evenodd',
                      stroke: '#0b9444',
                      strokeWidth: 80,
                      strokeLinecap: 'round',
                      strokeLinejoin: 'miter',
                      strokeMiterlimit: 4,
                      strokeOpacity: 1,
                    }}
                    d="m 410.7,448.46218 115.37,115.013"
                  />
                  <path
                    className="blend k1"
                    style={{
                      display: 'inline',
                      opacity: 1,
                      fill: '#1f91ac',
                      fillOpacity: 1,
                      fillRule: 'evenodd',
                      stroke: '#da3931',
                      strokeWidth: 80,
                      strokeLinecap: 'round',
                      strokeLinejoin: 'miter',
                      strokeMiterlimit: 4,
                      strokeOpacity: 1,
                    }}
                    d="m 215.32637,644.48746 0,115.22634"
                  />
                  <path
                    className="blend k2"
                    d="m 215.31263,759.5965 115.37,-115.013"
                    style={{
                      fill: 'none',
                      fillRule: 'evenodd',
                      stroke: '#1f91ac',
                      strokeWidth: 80,
                      strokeLinecap: 'round',
                      strokeLinejoin: 'miter',
                      strokeMiterlimit: 4,
                      strokeOpacity: 1,
                    }}
                  />
                </g>
                <path
                  className="h3"
                  d="m 525.41374,252.65768 0,115.22634"
                  style={{
                    display: 'inline',
                    opacity: 1,
                    fill: '#1f91ac',
                    fillOpacity: 1,
                    fillRule: 'evenodd',
                    stroke: '#1f91ac',
                    strokeWidth: '79.81949615',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'miter',
                    strokeMiterlimit: 4,
                    strokeOpacity: 1,
                  }}
                />
                <circle
                  className="h4"
                  style={{
                    opacity: 1,
                    fill: '#df871b',
                    fillOpacity: 1,
                    stroke: 'none',
                    strokeWidth: 80,
                    strokeLinecap: 'round',
                    strokeLinejoin: 'miter',
                    strokeMiterlimit: 4,
                    strokeOpacity: 1,
                  }}
                  cx={526}
                  cy="252.36218"
                  r={40}
                />
                <circle
                  className="i4"
                  r={40}
                  cy="448.36218"
                  cx={273}
                  style={{
                    opacity: 1,
                    fill: '#ffffff',
                    fillOpacity: 1,
                    stroke: 'none',
                    strokeWidth: 80,
                    strokeLinecap: 'round',
                    strokeLinejoin: 'miter',
                    strokeMiterlimit: 4,
                    strokeOpacity: 1,
                  }}
                />
                <circle
                  className="n4"
                  style={{
                    opacity: 1,
                    fill: '#da3931',
                    fillOpacity: 1,
                    stroke: 'none',
                    strokeWidth: 80,
                    strokeLinecap: 'round',
                    strokeLinejoin: 'miter',
                    strokeMiterlimit: 4,
                    strokeOpacity: 1,
                  }}
                  cx="410.70001"
                  cy="448.66217"
                  r={40}
                />
                <circle
                  className="n5"
                  r={40}
                  cy="563.16217"
                  cx={526}
                  style={{
                    opacity: 1,
                    fill: '#da3931',
                    fillOpacity: 1,
                    stroke: 'none',
                    strokeWidth: 80,
                    strokeLinecap: 'round',
                    strokeLinejoin: 'miter',
                    strokeMiterlimit: 4,
                    strokeOpacity: 1,
                  }}
                />
                <circle
                  className="k3"
                  r={40}
                  cy="759.39655"
                  cx="215.31264"
                  style={{
                    opacity: 1,
                    fill: '#da3931',
                    fillOpacity: 1,
                    stroke: 'none',
                    strokeWidth: 80,
                    strokeLinecap: 'round',
                    strokeLinejoin: 'miter',
                    strokeMiterlimit: 4,
                    strokeOpacity: 1,
                  }}
                />
              </svg>
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
