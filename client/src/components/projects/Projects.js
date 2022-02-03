import React, { useEffect } from 'react';
import { useState } from 'react';
import ProjectDummyImage from '../../images/project.png';
import ProjectGif from '../../images/web_developing.gif';
import { Card } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import './projects.css';
import Face1 from '../../images/face1.png';
import Face2 from '../../images/face2.png';
import Face3 from '../../images/face3.png';
import folder from '../../images/folder.png';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Axios from 'axios';

const Projects = () => {
  const [data,setData] = useState(null)
  useEffect(async() => {
    const res = await Axios.get('https://acm-official-website.herokuapp.com/project/getprojects');
    setData(res.data);
  },[])
  console.log(data)

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

      {/* <div className="container card-cont">
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
      </div> */}
     
      <div className='project-div'>
      {data && data.data.map(project=>{
        return(
          <a href={project.GithubURL} target='_blank'>
          <div className='project'>
          <img src={folder} className='folder-img'/>
          <h2>{project.Title}</h2>
          <h6>{project.Description}</h6>
          <Stack direction="row" spacing={1}>
            {project.Languages.map(lang=>{
              return(
                <Chip label={lang} />
              )
            })}

          </Stack>
          <span></span>
        </div>
        </a>
         )
      })} 
        
        
      </div>
    </>
  );
};

export default Projects;
