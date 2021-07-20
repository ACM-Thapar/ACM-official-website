import React from 'react';

import { CruipThemeWrapper } from '../external-css/CruipThemeWrapper';

const Events = () => {
  return (
    <div>
      <CruipThemeWrapper>
        {/* Solid Animation */}
        <section className="eventpagetop">
          <div className="container">
            <div className="row justify-content-end">
              <div className="col-4">
                <h1 className="mainsectiontitle">Upcoming Events</h1>
                <p className="mainsectiontexteve">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ...
                  tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit ... tempor
                  incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit ... tempor incididunt ut
                  labore et dolore magna aliqua.
                </p>
              </div>
              <div className="hero-figure anime-element">
                <svg
                  className="placeholder"
                  width={528}
                  height={396}
                  viewBox="0 0 528 396">
                  <rect
                    width={528}
                    height={396}
                    style={{ fill: 'transparent' }}
                  />
                </svg>
                <div
                  className="hero-figure-box hero-figure-box-01"
                  data-rotation="45deg"
                />
                <div
                  className="hero-figure-box hero-figure-box-02"
                  data-rotation="-45deg"
                />
                <div
                  className="hero-figure-box hero-figure-box-03"
                  data-rotation="0deg"
                />
                <div
                  className="hero-figure-box hero-figure-box-04"
                  data-rotation="-135deg"
                />
                <div className="hero-figure-box hero-figure-box-05" />
                <div className="hero-figure-box hero-figure-box-06" />
                <div className="hero-figure-box hero-figure-box-07" />
                <div
                  className="hero-figure-box hero-figure-box-08"
                  data-rotation="-22deg"
                />
                <div
                  className="hero-figure-box hero-figure-box-09"
                  data-rotation="-52deg"
                />
                <div
                  className="hero-figure-box hero-figure-box-10"
                  data-rotation="-50deg"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="eventpagecards">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-4">
                <div
                  className="card eventcard lecard lecard1"
                  style={{ width: '18rem' }}>
                  <img
                    src="https://res.cloudinary.com/kriti711/image/upload/v1626162626/ACM%20Website/image_2_vbzq6k.svg"
                    className="card-img-top ecimg"
                    alt="events card image"
                  />
                  <div className="card-body">
                    <p className="card-title eventmonth">DEC</p>
                    <h4 className="card-title eventdate">25</h4>
                    <h4 className="card-title eventtitle">
                      Flamingo - UI/UX Design
                    </h4>
                    <a
                      href="#eventModal"
                      data-toggle="modal"
                      className="stretched-link cardmodallinkevent"
                    />
                    <p className="card-text eventdescription small">
                      Time - 8:00 AM - 10:00 PM <br />
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      ...
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div
                  className="card eventcard cecard cecard1"
                  style={{ width: '18rem' }}>
                  <img
                    src="https://res.cloudinary.com/kriti711/image/upload/v1626162626/ACM%20Website/image_2_vbzq6k.svg"
                    className="card-img-top ecimg"
                    alt="events card image"
                  />
                  <div className="card-body">
                    <p className="card-title eventmonth">DEC</p>
                    <h4 className="card-title eventdate">25</h4>
                    <h4 className="card-title eventtitle">
                      Flamingo - UI/UX Design
                    </h4>
                    <a
                      href="#eventModal"
                      data-toggle="modal"
                      className="stretched-link cardmodallinkevent"
                    />
                    <p className="card-text eventdescription small">
                      Time - 8:00 AM - 10:00 PM <br />
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      ...
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div
                  className="card eventcard recard recard1"
                  style={{ width: '18rem' }}>
                  <img
                    src="https://res.cloudinary.com/kriti711/image/upload/v1626162626/ACM%20Website/image_2_vbzq6k.svg"
                    className="card-img-top ecimg"
                    alt="events card image"
                  />
                  <div className="card-body">
                    <p className="card-title eventmonth">DEC</p>
                    <h4 className="card-title eventdate">25</h4>
                    <h4 className="card-title eventtitle">
                      Flamingo - UI/UX Design
                    </h4>
                    <a
                      href="#eventModal"
                      data-toggle="modal"
                      className="stretched-link cardmodallinkevent"
                    />
                    <p className="card-text eventdescription small">
                      Time - 8:00 AM - 10:00 PM <br />
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      ...
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-4">
                <div
                  className="card eventcard lecard lecard2"
                  style={{ width: '18rem' }}>
                  <img
                    src="https://res.cloudinary.com/kriti711/image/upload/v1626162626/ACM%20Website/image_2_vbzq6k.svg"
                    className="card-img-top ecimg"
                    alt="events card image"
                  />
                  <div className="card-body">
                    <p className="card-title eventmonth">DEC</p>
                    <h4 className="card-title eventdate">25</h4>
                    <h4 className="card-title eventtitle">
                      Flamingo - UI/UX Design
                    </h4>
                    <a
                      href="#eventModal"
                      data-toggle="modal"
                      className="stretched-link cardmodallinkevent"
                    />
                    <p className="card-text eventdescription small">
                      Time - 8:00 AM - 10:00 PM <br />
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      ...
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div
                  className="card eventcard cecard cecard2"
                  style={{ width: '18rem' }}>
                  <img
                    src="https://res.cloudinary.com/kriti711/image/upload/v1626162626/ACM%20Website/image_2_vbzq6k.svg"
                    className="card-img-top ecimg"
                    alt="events card image"
                  />
                  <div className="card-body">
                    <p className="card-title eventmonth">DEC</p>
                    <h4 className="card-title eventdate">25</h4>
                    <h4 className="card-title eventtitle">
                      Flamingo - UI/UX Design
                    </h4>
                    <a
                      href="#eventModal"
                      data-toggle="modal"
                      className="stretched-link cardmodallinkevent"
                    />
                    <p className="card-text eventdescription small">
                      Time - 8:00 AM - 10:00 PM <br />
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      ...
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div
                  className="card eventcard recard recard2"
                  style={{ width: '18rem' }}>
                  <img
                    src="https://res.cloudinary.com/kriti711/image/upload/v1626162626/ACM%20Website/image_2_vbzq6k.svg"
                    className="card-img-top ecimg"
                    alt="events card image"
                  />
                  <div className="card-body">
                    <p className="card-title eventmonth">DEC</p>
                    <h4 className="card-title eventdate">25</h4>
                    <h4 className="card-title eventtitle">
                      Flamingo - UI/UX Design
                    </h4>
                    <a
                      href="#eventModal"
                      data-toggle="modal"
                      className="stretched-link cardmodallinkevent"
                    />
                    <p className="card-text eventdescription small">
                      Time - 8:00 AM - 10:00 PM <br />
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      ...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Modal */}
        <section className="evemodal">
          <div
            className="modal fade"
            id="eventModal"
            tabIndex={-1}
            aria-labelledby="eventModalLabel"
            aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-eve" style={{ width: '38rem' }}>
                <img
                  src="./images/event.jpg"
                  className="modal-img"
                  alt="events card image"
                />
                <div className="main-content">
                  <h3 className="etitle">Flamingo- UI/UX Design</h3>
                  <p className="emonth">DEC</p>
                  <p className="edate">25</p>
                  <p className="etime">Time - 8:00 AM - 10:00 PM</p>
                </div>
                <div className="eparas">
                  <p>
                    Folly words widow one downs few age every seven. If miss
                    part by fact <br />
                    he park just shew. <br />
                    <br />
                    Discovered had get considered projection who favourable.
                    Necessary <br />
                    up knowledge it tolerably. Unwilling departure education is
                    be
                    <br />
                    dashwoods or an. Use off agreeable law unwilling sir
                    deficient curiosity <br />
                    instantly. Easy mind life fact with see has bore ten. <br />
                    <br />
                    Parish any chatty can elinor direct for former. Up as meant
                    widow <br />
                    equal an share least.
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </CruipThemeWrapper>
    </div>
  );
};

export default Events;
