import React from 'react';
import dummyImage from '../../images/face4.png';
import SocietyHeadCard from './SocietyHeadCard';

const SocietyHeads = ({ data }) => {
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

        {data.map((socHead) => {
          return <SocietyHeadCard data={socHead} />;
        })}
      </div>
    </>
  );
};

export default SocietyHeads;
