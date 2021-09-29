import React, { useState, useEffect } from 'react';
import dummyImage from '../../images/face4.png';
import PresidentCard from './PresidentCard';
import axios from 'axios';

const Presidents = () => {
  let presidentOneDummyData = { name: 'President 1', imgSrc: dummyImage };
  return (
    <div className="presidents">
      <a name="presidents" />
      <h2 className="president-heading">Presidents</h2>
      <PresidentCard data={presidentOneDummyData} />
    </div>
  );
};

export default Presidents;
