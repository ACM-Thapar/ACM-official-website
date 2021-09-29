import React from 'react';

const PresidentCard = ({ data }) => {
  return (
    <>
      <div className="president-img-div">
        <img src={data.imgSrc} className="president-img" />
        <p className="position">President</p>
        <p className="name">{data.name}</p>
        <a href="">
          <i className="fa fa-github" />
        </a>
        <a href="">
          <i className="fa fa-linkedin" />
        </a>
        <a href="">
          <i className="fa fa-twitter" />
        </a>
      </div>
    </>
  );
};

export default PresidentCard;
