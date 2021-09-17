import React from 'react';
import dummyImage from '../../images/face4.png';
import SocietyHeadCard from './SocietyHeadCard';

const SocietyHeads = () => {
  const societyHeadDummyData1 = {
    name: 'Ujjwal Aggarwal',
    post: 'General Secretary',
    imgSrc: dummyImage,
  };
  const societyHeadDummyData2 = {
    name: 'Mahek Khowala',
    post: 'Joint Secretary',
    imgSrc: dummyImage,
  };
  const societyHeadDummyData3 = {
    name: 'Ujjwal Aggarwal',
    post: 'General Secretary',
    imgSrc: dummyImage,
  };
  const societyHeadData = [
    societyHeadDummyData1,
    societyHeadDummyData2,
    societyHeadDummyData3,
  ];
  return (
    <>
      <div className="society-heads">
        <h2 className="society-heads-heading">Society Heads</h2>

        {societyHeadData.map((data) => {
          return <SocietyHeadCard data={data} />;
        })}

        {/* <div className="society-heads-img-div">
          <img src={dummyImage} className="society-heads-img" />
          <p className="position">General secretary</p>
          <p className="name">Gopal Joshi</p>
          <p>
            <i className="fa fa-github" />
            <i className="fa fa-linkedin" />
            <i className="fa fa-twitter" />
          </p>
        </div>

        <div className="society-heads-img-div">
          <img src={dummyImage} className="society-heads-img" />
          <p className="position">Academic Affairs</p>
          <p className="name">Anjali Nagarkar</p>
          <p>
            <i className="fa fa-github" />
            <i className="fa fa-linkedin" />
            <i className="fa fa-twitter" />
          </p>
        </div>
        <div className="society-heads-img-div">
          <img src={dummyImage} className="society-heads-img" />
          <p className="position">External Affairs</p>
          <p className="name">Karthik Jain</p>
          <p>
            <i className="fa fa-github" />
            <i className="fa fa-linkedin" />
            <i className="fa fa-twitter" />
          </p>
        </div> */}
      </div>
    </>
  );
};

export default SocietyHeads;
