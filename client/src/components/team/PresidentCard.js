import React from 'react';

const PresidentCard = ({ data }) => {
  return (
    <>
      <div className="president-img-div">
        <img src={data.imgSrc} className="president-img" />
        <p className="position">President</p>
        <p className="name">{data.name}</p>
        <p>
          <a href="" alt="">
            <i className="fa fa-github" />
          </a>
          <a href="" alt="">
            <i className="fa fa-linkedin" />
          </a>
          <a href="" alt="">
            <i className="fa fa-twitter" />
          </a>
        </p>
      </div>
    </>
  );
};

export default PresidentCard;
