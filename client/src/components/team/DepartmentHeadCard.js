import React from 'react';

const DepartmentHeadCard = () => {
  return (
    <>
      <div className="slick-slide">
        <img src={dummyImage} alt="dept-head" />
        <div className="carousel-credentials">
          <p className="position">Tech Head</p>
          <p className="name">Mohinder Das</p>
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
