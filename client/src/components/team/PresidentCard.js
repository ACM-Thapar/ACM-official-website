import React from 'react';

const PresidentCard = ({ data }) => {
  return (
    <>
      <div className="president-img-div">
        <img src={data.imgSrc} className="president-img" />
        <p className="position">President</p>
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

export default PresidentCard;
