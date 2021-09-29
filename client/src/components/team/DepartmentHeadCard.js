import React from 'react';

const DepartmentHeadCard = ({ index, data }) => {
  const name = data.name;
  const post = data.post;
  const imgSrc = data.imgSrc;
  console.log('====================================');
  console.log(data.socialHandles.github);
  console.log('====================================');

  return (
    <>
      <div className="slick-slide">
        <img src={imgSrc} alt="dept-head" />
        <div className="carousel-credentials">
          <p className="position">{post}</p>
          <p className="name">{name}</p>
          <p>
            <a href={data.socialHandles.github} alt="">
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
      </div>
    </>
  );
};

export default DepartmentHeadCard;
