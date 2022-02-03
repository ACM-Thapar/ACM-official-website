import React, { useState, useEffect } from 'react';
import dummyImage from '../../images/face4.png';
import TeamCarousel from './TeamCarousel';
import Presidents from './Presidents';
import SocietyHeads from './SocietyHeads';
import axios from 'axios';
import Loader from '../loader/loader';

const Team = () => {
  let [data, setData] = useState(1);
  const [load, setLoad] = useState(false)
  // let baseUrl = 'https://acm-official-website.herokuapp.com/team';
  // useEffect(async() => {
  //   axios.get(baseUrl).then((response) => {
  //     setData(response.data[3]);
  //   });
  // }, []);
  useEffect(async() => {
    setLoad(true)
    const res = await axios.get('https://acm-official-website.herokuapp.com/team');
    setData(res.data);
    setLoad(false)
  },[])
  const presidentData = data[0] && data[0].President;
  const societyHeadData = data[0] && data[0].SocietyHead;
  const departmentHeadData = data[0] && data[0].DepartmentHead;
  console.log(departmentHeadData)
  return (
    <>
    {load? <Loader/>: 
      <div className="team-page">
        <div className="team-page-headings-div">
          <h1 className="team-page-head">Meet the team</h1>
          <h3 className="team-page-subhead">
            The people who will help you in your journey!
          </h3>
        </div>
        {presidentData && <Presidents data={presidentData} />}
        {societyHeadData && <SocietyHeads data={societyHeadData} />}

        <div className="department-heads">
          <h2 className="department-heads-heading">Department Heads</h2>
          {departmentHeadData && <TeamCarousel data={departmentHeadData} />}
        </div>
      </div>
    }
    </>
  );
};

export default Team;
