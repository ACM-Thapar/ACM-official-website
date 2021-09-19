import React from 'react';
import { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import DummyProjectImage from '../../images/project.png';
import './projects.css';
import Face1 from '../../images/face1.png';
import Face2 from '../../images/face2.png';
import Face3 from '../../images/face3.png';

export default function ProjectCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Card style={{ width: '18rem' }} className="card procard">
        <img src={DummyProjectImage} className="card-img-top pcimg " />
        <div className="card-body" style={{ padding: '2rem 1.2rem' }}>
          <p className="card-title promonth">DEC</p>
          <h4 className="card-title prodate">25</h4>
          <h4 className="card-title protitle">Website Design Project</h4>
          <a
            href="#exampleModal"
            data-toggle="modal"
            className="stretched-link cardmodallinkevent"
            onClick={handleShow}
          />
          <p className="card-text prodescription small">
            Time - 8:00 AM - 10:00 PM <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ...
          </p>
        </div>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <div className="modal-content mcpro">
          <img src={DummyProjectImage} className="modal-img mipro" alt="" />
          <div className="main-content">
            <h3 className="modal-heading mhpro">Web Design Project</h3>
            <div className="datepro">
              <p className="monthpro">DEC</p>
              <p className="dtpro">25</p>
            </div>
            <div className="paraspro">
              <p>
                Folly words widow one downs few age every seven. If miss part by
                fact he park just shew.
                <br />
                <br />
                Discovered had get considered projection who favourable.
                Necessary up knowledge it tolerably. Unwilling departure
                education is be dashwoods or an. Use off agreeable law unwilling
                sir deficient curiosity instantly. Easy mind life fact with see
                has bore ten.
                <br />
                <br />
                Parish any chatty can elinor direct for former. Up as meant
                widow equal an share least.
              </p>
            </div>
            <div className="teampro">
              <h2>TEAM</h2>
              <div className="rowmodal">
                <div className="col-2 pc2pro">
                  <img src={Face1} alt />
                </div>
                <div className="pc2textpro">
                  <p className="randompro">Random Name</p>
                  <p className="positionpro">POSITION</p>
                </div>
              </div>
              <div className="rowmodal">
                <div className="col-2 pc2pro">
                  <img src={Face2} alt />
                </div>
                <div className="pc2textpro">
                  <p className="randompro">Random Name</p>
                  <p className="positionpro">POSITION</p>
                </div>
              </div>
              <div className="rowmodal">
                <div className="col-2 pc2pro">
                  <img src={Face3} alt />
                </div>
                <div className="pc2textpro">
                  <p className="randompro">Random Name</p>
                  <p className="positionpro">POSITION</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
