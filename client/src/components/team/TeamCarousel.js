import React, { Fragment } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import dummyImage from '../../images/face4.png';

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

const TeamCarousel = () => {
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
  return (
    <Fragment>
      <div className="carousel">
        <Slider {...settings}>
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
          <div className="slick-slide">
            <img src={dummyImage} alt="dept-head" />
            <div className="carousel-credentials">
              <p className="position">Jr. Tech Head</p>
              <p className="name">Sanjana Gadhavi</p>
              <p>
                <i className="fa fa-github" />
                <i className="fa fa-linkedin" />
                <i className="fa fa-twitter" />
              </p>
            </div>
          </div>
          <div className="slick-slide">
            <img src={dummyImage} alt="dept-head" />
            <div className="carousel-credentials">
              <p className="position">PR Head</p>
              <p className="name">Meera D'Cruze</p>
              <p>
                <i className="fa fa-github" />
                <i className="fa fa-linkedin" />
                <i className="fa fa-twitter" />
              </p>
            </div>
          </div>
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
          <div className="slick-slide">
            <img src={dummyImage} alt="dept-head" />
            <div className="carousel-credentials">
              <p className="position">Jr. Tech Head</p>
              <p className="name">Sanjana Gadhavi</p>
              <p>
                <i className="fa fa-github" />
                <i className="fa fa-linkedin" />
                <i className="fa fa-twitter" />
              </p>
            </div>
          </div>
          <div className="slick-slide">
            <img src={dummyImage} alt="dept-head" />
            <div className="carousel-credentials">
              <p className="position">PR Head</p>
              <p className="name">Meera D'Cruze</p>
              <p>
                <i className="fa fa-github" />
                <i className="fa fa-linkedin" />
                <i className="fa fa-twitter" />
              </p>
            </div>
          </div>
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
          <div className="slick-slide">
            <img src={dummyImage} alt="dept-head" />
            <div className="carousel-credentials">
              <p className="position">Jr. Tech Head</p>
              <p className="name">Sanjana Gadhavi</p>
              <p>
                <i className="fa fa-github" />
                <i className="fa fa-linkedin" />
                <i className="fa fa-twitter" />
              </p>
            </div>
          </div>
          <div className="slick-slide">
            <img src={dummyImage} alt="dept-head" />
            <div className="carousel-credentials">
              <p className="position">PR Head</p>
              <p className="name">Meera D'Cruze</p>
              <p>
                <i className="fa fa-github" />
                <i className="fa fa-linkedin" />
                <i className="fa fa-twitter" />
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </Fragment>
  );
};

export default TeamCarousel;
