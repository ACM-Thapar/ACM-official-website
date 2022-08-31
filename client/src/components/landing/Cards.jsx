import React from 'react';

const Cards = (props) => {
  const { heading, content } = props;
  return (
    <div className="col-md-4">
      <div className="custom-card">
        <h3 className="whatwedopoints">{heading}</h3>
        <hr/>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Cards;
