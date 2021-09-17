import React from 'react';

const EventCard = () => {
  return (
    <>
      <div className="col-4">
        <div
          className="card eventcard cecard cecard1"
          style={{ width: '18rem' }}>
          <img
            src="https://res.cloudinary.com/kriti711/image/upload/v1626162626/ACM%20Website/image_2_vbzq6k.svg"
            className="card-img-top ecimg"
            alt="events card image"
          />
          <div className="card-body">
            <p className="card-title eventmonth">DEC</p>
            <h4 className="card-title eventdate">25</h4>
            <h4 className="card-title eventtitle">Flamingo - UI/UX Design</h4>
            <a
              href="#eventModal"
              data-toggle="modal"
              className="stretched-link cardmodallinkevent"
            />
            <p className="card-text eventdescription small">
              Time - 8:00 AM - 10:00 PM <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ...
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventCard;
