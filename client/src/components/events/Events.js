import React, { Fragment } from 'react';
import { useState, useEffect } from 'react';
import ProjectDummyImage from '../../images/project.png';
import ProjectGif from '../../images/events-page-gif.gif';
import { Card } from 'react-bootstrap';
import EventCard from './EventCard';
import axios from 'axios';
import Loader from '../loader/loader';
import calender from '../../images/calendar.png'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack'

const Events = () => {
  let [data, setData] = useState(null);
  const [load, setLoad] = useState(false)

  useEffect(async() => {
    setLoad(true)
    const res = await axios.get('https://acm-official-website.herokuapp.com/event');
    setData(res.data);
    setLoad(false)

  },[])
  console.log(data)
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
    {load? <Loader/>: 
    <Fragment>
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

      <div className='project-div'>
          {data && data.map(eventData => {
            const label = `${eventData.Day} ${eventData.Month}`
            return(
              <a href={eventData.GithubURL} target='_blank'>
          <div className='project'>
          <img src={calender} className='folder-img'/>
          <img src={eventData.ImgURL} className='project-img'/>
          <h2>{eventData.Name}</h2>
          <h6>{eventData.Description}</h6>
          <div classNme='stack-wrapper'>
            <Stack direction="row" spacing={1}>
              <Chip label={label}/>
              {eventData.Upcoming? <Chip label="Upcoming" color="success"/>: ' '}
            </Stack>
          </div>
          <p></p>
          {/* <div classNme='stack-wrapper'>
          <Stack direction="row" spacing={1}>
            {eventData.Languages.map(lang=>{
              return(
                <Chip label={lang} />
              )
            })}

          </Stack></div> */}
          <span></span>
        </div>
        </a>
            )
          })}
          {/* <div className="col-lg-4 col-md-6 col-sm-12 col-12 my-5 disp-flex">
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
          </div> */}
      </div>
      </Fragment>
      }
    </>
  );
};

export default Events;
