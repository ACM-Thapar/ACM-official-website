import React, { Fragment } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import dummyImage from '../../images/face4.png';
import DepartmentHeadCard from './DepartmentHeadCard';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'red' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'green' }}
      onClick={onClick}
    />
  );
}

const TeamCarousel = ({ data }) => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: true,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: false,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const deptHeadDummyData1 = {
    name: 'Ujjwal Aggarwal',
    post: 'General Secretary',
    imgSrc: dummyImage,
  };
  const deptHeadDummyData2 = {
    name: 'Mahek Khowala',
    post: 'Joint Secretary',
    imgSrc: dummyImage,
  };
  const deptHeadDummyData3 = {
    name: 'Ujjwal Aggarwal',
    post: 'General Secretary',
    imgSrc: dummyImage,
  };
  const deptHeadData = [
    deptHeadDummyData1,
    deptHeadDummyData2,
    deptHeadDummyData3,
  ];
  return (
    <Fragment>
      <div className="carousel">
        <Slider {...settings}>
          {data &&
            data.map((deptHead) => {
              const imgSrc = data.imgSrc ? data.imgSrc : dummyImage;
              return (
                <div className="slick-slide">
                  <img src={imgSrc} alt="dept-head" />
                  <div className="carousel-credentials">
                    <p className="position">{deptHead.post}</p>
                    <p className="name">{deptHead.name}</p>
                    <p>
                      <a href={deptHead.socialHandles.github} alt="">
                        <i className="fa fa-github" />
                      </a>
                      <a href={deptHead.socialHandles.linkedin} alt="">
                        <i className="fa fa-linkedin" />
                      </a>
                      <a href={deptHead.socialHandles.twitter} alt="">
                        <i className="fa fa-twitter" />
                      </a>
                    </p>
                  </div>
                </div>
              );
            })}
          {/* The Carousel only seems to work properly when there are more than two entries, remove the below duplicated code block
              when there are more than two department head entries in the backend */}
          {data &&
            data.map((deptHead) => {
              const imgSrc = data.imgSrc ? data.imgSrc : dummyImage;
              return (
                <div className="slick-slide">
                  <img src={imgSrc} alt="dept-head" />
                  <div className="carousel-credentials">
                    <p className="position">{deptHead.post}</p>
                    <p className="name">{deptHead.name}</p>
                    <p>
                      <a href={deptHead.socialHandles.github} alt="">
                        <i className="fa fa-github" />
                      </a>
                      <a href={deptHead.socialHandles.linkedin} alt="">
                        <i className="fa fa-linkedin" />
                      </a>
                      <a href={deptHead.socialHandles.twitter} alt="">
                        <i className="fa fa-twitter" />
                      </a>
                    </p>
                  </div>
                </div>
              );
            })}
        </Slider>
      </div>
    </Fragment>
  );
};

export default TeamCarousel;
