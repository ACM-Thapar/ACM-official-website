// import { School } from '@mui/icons-material';
import React, { Fragment } from 'react';
import { useState } from 'react';
import './Bootcamps.css';
import { School } from '@mui/icons-material';
import WebIcon from '@mui/icons-material/Web';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import FormatPaintIcon from '@mui/icons-material/FormatPaint';
import FunctionsIcon from '@mui/icons-material/Functions';

const panels = [
  {
    id: 0,
    backgroundImage:
      'https://res.cloudinary.com/do05f06ts/image/upload/v1663311980/academic_kykspn.jpg',
    active: true,
    heading: 'Academic Bootcamp',
    icon: 'school',
  },
  {
    id: 1,
    backgroundImage:
      'https://res.cloudinary.com/do05f06ts/image/upload/v1663311968/web_dev_vgzogg.jpg',
    active: false,
    heading: 'Web Dev Bootcamp',
    icon: 'web',
  },
  {
    id: 2,
    backgroundImage:
      'https://res.cloudinary.com/do05f06ts/image/upload/v1663312830/app_dev_yj2jdh.jpg',
    active: false,
    heading: 'App Dev Bootcamp',
    icon: 'app',
  },
  {
    id: 3,
    backgroundImage:
      'https://res.cloudinary.com/do05f06ts/image/upload/v1663311978/ui-ux_jojt6u.jpg',
    active: false,
    heading: 'UI/UX Bootcamp',
    icon: 'ui',
  },
  {
    id: 4,
    backgroundImage:
      'https://res.cloudinary.com/do05f06ts/image/upload/v1663313452/ml_vfhww2.jpg',
    // 'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    active: false,
    heading: 'Machine Learning Bootcamp',
    icon: 'ml',
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
  };
  return (
    <div
      onMouseEnter={() => clickHandler(id)}
      className={`panel ${active ? 'active' : null}`}
      style={{
        // backgroundColor: 'black',
        backgroundImage: `url(${img})`,
      }}>
      <div className="basecamp-icon">
        {id === 0 ? (
          <School color="primary" className="mat-icon" fontSize="large" />
        ) : id === 1 ? (
          <WebIcon color="primary" className="mat-icon" fontSize="large" />
        ) : id === 2 ? (
          <AppShortcutIcon
            color="primary"
            className="mat-icon"
            fontSize="large"
          />
        ) : id === 3 ? (
          <FormatPaintIcon
            color="primary"
            className="mat-icon"
            fontSize="large"
          />
        ) : id === 4 ? (
          <FunctionsIcon
            color="primary"
            className="mat-icon"
            fontSize="large"
          />
        ) : null}
      </div>
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
            <Panel
              img={panel.backgroundImage}
              active={panel.active}
              heading={panel.heading}
              id={panel.id}
              setState={setState}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Bootcamps;
