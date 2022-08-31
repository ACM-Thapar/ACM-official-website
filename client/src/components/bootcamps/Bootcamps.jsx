import React, { Fragment } from 'react';
import { useState } from 'react';
import './Bootcamps.css';

const panels = [
  {
    id: 0,
    backgroundImage:
      'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    active: true,
    heading: 'Academic Bootcamp',
  },
  {
    id: 1,
    backgroundImage:
      'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    active: false,
    heading: 'Web Dev Bootcamp',
  },
  {
    id: 2,
    backgroundImage:
      'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    active: false,
    heading: 'App Dev Bootcamp',
  },
  {
    id: 3,
    backgroundImage:
      'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    active: false,
    heading: 'UI/UX Bootcamp',
  },
  {
    id: 4,
    backgroundImage:
      'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    active: false,
    heading: 'Machine Learning Bootcamp',
  },
];

const Panel = (props) => {
  const { img, active, heading, id, setState } = props;
  const clickHandler = (id) => {
    panels.forEach((panel) => {
      panel.active = false;
    });

    panels[id].active = true;
    setState(Math.random());
    console.log(panels);
  };
  return (
    <div
      onMouseEnter={() => clickHandler(id)}
      className={`panel ${active ? 'active' : null}`}
      style={{
        backgroundImage: `url(${img})`,
      }}>
      <h3>{heading}</h3>
    </div>
  );
};

const Bootcamps = () => {
  const [state, setState] = useState(0);
  return (
    <div className="bootcamp-section">
      <div class="container">
        {panels.map((panel) => {
          return (
            <Fragment onClick={() => alert('hey')}>
              <Panel
                img={panel.backgroundImage}
                active={panel.active}
                heading={panel.heading}
                id={panel.id}
                setState={setState}
              />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Bootcamps;
