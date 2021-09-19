import React from 'react';
import { useState } from 'react';
import ProjectDummyImage from '../../images/project.png';
import ProjectGif from '../../images/web_developing.gif';
import { Card } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import './projects.css';
import Face1 from '../../images/face1.png';
import Face2 from '../../images/face2.png';
import Face3 from '../../images/face3.png';

const Projects = () => {
  const dummyData = {
    month: 'DEC',
    date: '25',
    title: 'Website Design Project',
    cardBriefDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    cardImageSrc: ProjectDummyImage,

    mainDescription:
      'Folly words widow one downs few age every seven. If miss part by fact he park just shew.\n\n Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education is be dashwoods or an. Use off agreeable law unwilling sir deficient curiosity instantly. Easy mind life fact with see has bore ten.\n\n Parish any chatty can elinor direct for former. Up as meant widow equal an share least. \n\n Folly words widow one downs few age every seven. If miss part by fact he park just shew.',
    team: [
      {
        name: 'Name 1',
        position: 'Position 1',
        imgSrc: Face1,
      },
      {
        name: 'Name 2',
        position: 'Position 2',
        imgSrc: Face2,
      },
      {
        name: 'Random Name 3',
        position: 'Position 3',
        imgSrc: Face3,
      },
    ],
  };

  return (
    <>
      <section className="projectspagetop">
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-4">
              <h1 className="pmainsectiontitle">Projects</h1>
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
            <ProjectCard data={dummyData} />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 my-5 disp-flex">
            <ProjectCard data={dummyData} />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 my-5 disp-flex">
            <ProjectCard data={dummyData} />
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 col-12 my-5 disp-flex">
            <ProjectCard data={dummyData} />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 my-5 disp-flex">
            <ProjectCard data={dummyData} />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 my-5 disp-flex">
            <ProjectCard data={dummyData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
