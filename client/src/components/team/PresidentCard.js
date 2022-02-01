import React from 'react';
import dummyImage from '../../images/face4.png';

const PresidentCard = ({ data }) => {
  const imgSrc = data.ImgURL ? data.ImgURL : dummyImage;

  return (
    <>
      <div className="president-img-div">
        <img src={imgSrc} className="president-img" />
        <p className="position">President</p>
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

export default PresidentCard;
