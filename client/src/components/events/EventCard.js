import React from 'react';
import { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import DummyProjectImage from '../../images/project.png';

export default function EventCard({ data }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const month = ["Jan" ,"Feb" ,"Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];
  // let monthName = month[(data.StartDate).getMonth()];
  return (
    <div>
      <Card style={{ width: '18rem' }} className="card procard">
        <img src={data.ImgURL} className="card-img-top pcimg " />
        <div className="card-body" style={{ padding: '2rem 1.2rem' }}>
          <p className="card-title promonth">{data.Month}</p>
          <h4 className="card-title prodate">{data.Day}</h4>
          <h4 className="card-title protitle">{data.Name}</h4>
          <a
            href="#exampleModal"
            data-toggle="modal"
            className="stretched-link cardmodallinkevent"
            onClick={handleShow}
          />
          <p className="card-text prodescription small">
            {data.Description}
          </p>
        </div>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <div className="modal-content mcpro">
          <img src={data.ImgURL} className="modal-img mipro" alt="" />
          <div className="main-content">
            <h3 className="modal-heading mhpro">{data.Name}</h3>
            <div className="datepro">
              <p className="monthpro">{data.StartDate}</p>
              <p className="dtpro">{data.Time}</p>
            </div>
            <div className="paraspro" style={{ paddingRight: '2rem' }}>
              <p>{data.Description}</p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
