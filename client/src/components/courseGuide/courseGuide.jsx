import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './courseGuide.css';
import RepoCard from './repoCard';

const CourseGuide = () => {
  return (
    <div className="course-guide-div">
      <Row>
        <Col sm={6}>
          <RepoCard />
        </Col>
        <Col sm={6}>
          <h1>Want to learn something new?</h1>
          <h3>Check out our curated list of resources</h3>
        </Col>
      </Row>
    </div>
  );
};

export default CourseGuide;
