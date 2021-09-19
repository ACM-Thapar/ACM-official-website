import React from 'react';
import { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import DummyProjectImage from '../../images/project.png';

export default function EventCard({ data }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Card style={{ width: '18rem' }} className="card procard">
        <img src={DummyProjectImage} className="card-img-top pcimg " />
        <div className="card-body" style={{ padding: '2rem 1.2rem' }}>
          <p className="card-title promonth">{data.month}</p>
          <h4 className="card-title prodate">{data.date}</h4>
          <h4 className="card-title protitle">{data.title}</h4>
          <a
            href="#exampleModal"
            data-toggle="modal"
            className="stretched-link cardmodallinkevent"
            onClick={handleShow}
          />
          <p className="card-text prodescription small">
            {data.cardBriefDescription}
          </p>
        </div>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <div className="modal-content mcpro">
          <img src={DummyProjectImage} className="modal-img mipro" alt="" />
          <div className="main-content">
            <h3 className="modal-heading mhpro">{data.cardTitle}</h3>
            <div className="datepro">
              <p className="monthpro">{data.month}</p>
              <p className="dtpro">{data.date}</p>
            </div>
            <div className="paraspro">
              <p>{data.mainDescription}</p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
