import React from 'react';
import { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import DummyProjectImage from '../../images/project.png';
import './projects.css';
import Face1 from '../../images/face1.png';
import Face2 from '../../images/face2.png';
import Face3 from '../../images/face3.png';

export default function ProjectCard({ data }) {
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

            <div className="teampro">
              <h2>TEAM</h2>

              {data.team.map((member) => {
                return (
                  <div className="rowmodal">
                    <div className="col-2 pc2pro">
                      <img src={member.imgSrc} alt />
                    </div>
                    <div className="pc2textpro">
                      <p className="randompro">{member.name}</p>
                      <p className="positionpro">{member.position}</p>
                    </div>
                  </div>
                );
              })}

              {/* <div className="rowmodal">
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
              </div> */}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
