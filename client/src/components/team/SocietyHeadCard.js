import React from 'react';
import dummyImage from '../../images/face4.png';

const SocietyHeadCard = ({ data }) => {
  const imgSrc = data.ImgURL ? data.ImgURL : dummyImage;
  return (
    <>
      <div className="society-heads-img-div">
        <img src={imgSrc} className="society-heads-img" />
        <p className="position">{data.post}</p>
        <p className="name">{data.name}</p>
        <p>
          <a href={data.socialHandles.github} alt="">
            <i className="fa fa-github" />
          </a>
          <a href={data.socialHandles.linkedIn} alt="">
            <i className="fa fa-linkedin" />
          </a>
          <a href={data.socialHandles.twitter} alt="">
            <i className="fa fa-twitter" />
          </a>
        </p>
      </div>
    </>
  );
};

export default SocietyHeadCard;
