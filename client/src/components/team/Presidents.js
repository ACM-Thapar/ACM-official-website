import React from 'react';
import dummyImage from '../../images/face4.png';
import PresidentCard from './PresidentCard';

const Presidents = () => {
  let presidentOneDummyData = { name: 'President 1', imgSrc: dummyImage };
  return (
    <div className="presidents">
      <a name="presidents" />
      <h2 className="president-heading">Presidents</h2>
      <PresidentCard data={presidentOneDummyData} />
      {/* <div className="president-img-div">
        <img src={dummyImage} className="president-img" />
        <p className="position">President</p>
        <p className="name">Akhil Gupta</p>
        <p>
          <i className="fa fa-github" />
          <i className="fa fa-linkedin" />
          <i className="fa fa-twitter" />
        </p>
      </div>
      <div className="president-img-div">
        <img src={dummyImage} className="president-img" />
        <p className="position">President</p>
        <p className="name">Anant Chaudhri</p>
        <p>
          <i className="fa fa-github" />
          <i className="fa fa-linkedin" />
          <i className="fa fa-twitter" />
        </p>
      </div> */}
    </div>
  );
};

export default Presidents;
