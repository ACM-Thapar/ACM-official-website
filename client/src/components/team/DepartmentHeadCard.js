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
      </div>
    </>
  );
};

export default DepartmentHeadCard;
