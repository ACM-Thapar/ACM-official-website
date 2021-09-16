import React from 'react';
import dummyImage from '../../images/face4.png';

const SocietyHeadCard = ({ data }) => {
  return (
    <>
      <div className="society-heads-img-div">
        <img src={data.imgSrc} className="society-heads-img" />
        <p className="position">{data.post}</p>
        <p className="name">{data.name}</p>
        <p>
          <i className="fa fa-github" />
          <i className="fa fa-linkedin" />
          <i className="fa fa-twitter" />
        </p>
      </div>
    </>
  );
};

export default SocietyHeadCard;
