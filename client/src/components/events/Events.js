import React from 'react';
import { useState } from 'react';
import ProjectDummyImage from '../../images/project.png';
import ProjectGif from '../../images/web_developing.gif';
import { Card } from 'react-bootstrap';
import EventCard from './EventCard';
const Events = () => {
  const dummyData = {
    month: 'DEC',
    date: '25',
    cardTitle: 'Website Design Project',
    cardBriefDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    cardImageSrc:
      'https://res.cloudinary.com/kriti711/image/upload/v1626162626/ACM%20Website/image_2_vbzq6k.svg',

    mainDescription:
      'Folly words widow one downs few age every seven. If miss part by fact he park just shew.\n\n Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education is be dashwoods or an. Use off agreeable law unwilling sir deficient curiosity instantly. Easy mind life fact with see has bore ten.\n\n Parish any chatty can elinor direct for former. Up as meant widow equal an share least. \n\n Folly words widow one downs few age every seven. If miss part by fact he park just shew.',
  };
  return (
    <>
      <section className="projectspagetop">
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-4">
              <h1 className="pmainsectiontitle">Upcoming Events</h1>
              <p className="mainsectiontextpro">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ...
                tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit ... tempor
                incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor
                sit amet, consectetur adipiscing elit ... tempor incididunt ut
                labore et dolore magna aliqua.
              </p>
            </div>
            <div className="projectspagegif col-6">
              <img src={ProjectGif} style={{ width: '100%' }} />
            </div>
          </div>
        </div>
      </section>

      <div className="container card-cont">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 my-5 disp-flex">
            <EventCard data={dummyData} />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 my-5 disp-flex">
            <EventCard data={dummyData} />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 my-5 disp-flex">
            <EventCard data={dummyData} />
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 col-12 my-5 disp-flex">
            <EventCard data={dummyData} />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 my-5 disp-flex">
            <EventCard data={dummyData} />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 my-5 disp-flex">
            <EventCard data={dummyData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
