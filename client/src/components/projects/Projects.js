import React from 'react';
import { useState } from 'react';
import ProjectDummyImage from '../../images/project.png';
import ProjectGif from '../../images/web_developing.gif';
import { Card } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import './projects.css';

const Projects = () => {
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
            <ProjectCard className="procard" />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 my-5 disp-flex">
            <ProjectCard />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 my-5 disp-flex">
            <ProjectCard />
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 col-12 my-5 disp-flex">
            <ProjectCard />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 my-5 disp-flex">
            <ProjectCard />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 my-5 disp-flex">
            <ProjectCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
