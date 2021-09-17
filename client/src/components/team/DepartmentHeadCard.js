import React from 'react';

const DepartmentHeadCard = ({ index, data }) => {
  const name = data.name;
  const post = data.post;
  const imgSrc = data.imgSrc;
  return (
    <>
      <div className="slick-slide">
        <img src={imgSrc} alt="dept-head" />
        <div className="carousel-credentials">
          <p className="position">{post}</p>
          <p className="name">{name}</p>
          <p>
            <i className="fa fa-github" />
            <i className="fa fa-linkedin" />
            <i className="fa fa-twitter" />
          </p>
        </div>
      </div>
    </>
  );
};

export default DepartmentHeadCard;
