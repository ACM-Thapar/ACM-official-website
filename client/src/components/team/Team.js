import React, { useState, useEffect } from 'react';
import dummyImage from '../../images/face4.png';
import TeamCarousel from './TeamCarousel';
import Presidents from './Presidents';
import SocietyHeads from './SocietyHeads';
import axios from 'axios';

const Team = () => {
  let [data, setData] = useState(1);
  let baseUrl = 'https://acm-official-website.herokuapp.com/team';
  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setData(response.data[3]);
    });
  }, []);
  const presidentData = data && data['President'];
  const societyHeadData = data && data['SocietyHead'];
  const departmentHeadData = data && data['DepartmentHead'];
  return (
    <>
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
    </>
  );
};

export default Team;
