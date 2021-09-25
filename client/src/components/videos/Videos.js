import React from 'react';

const Videos = () => {
  return (
    <>
      <div>
        {/* Switch button section */}
        <section className="bvswitch">
          <div className="container">
            <div className="row">
              <div className="col-md-3" />
              <div className="col-md-4">
                <h4 className="vblogswitch">BLOGS</h4>
              </div>
              <div className="col-md-4">
                <h4 className="vvideoswitch">VIDEOS</h4>
              </div>
            </div>
          </div>
        </section>
        {/* Recent Section */}
        <section className="recent">
          <div className="container">
            <div className="row justify-content-center">
              <h1 className="recentv">Video Content</h1>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="row justify-content-center">
            <p className="recentv">
              Watch the curated educational content to develop your skill
            </p>
          </div>
        </div>
        {/* Latest Uploads */}
        <div className="container">
          <div className="row justify-content-center">
            <h3 className="latestv">Latest Uploads</h3>
          </div>
        </div>
        {/* Videos */}
        <section className="mainvideo">
          <div className="container">
            <div className="row justify-content-center">
              <iframe
                className="mainvideolink"
                src="https://www.youtube.com/embed/dAqthtQvep4"
                frameBorder={0}></iframe>
            </div>
          </div>
          <div className="conatiner">
            <div className="row justify-content-center">
              <h5 className="vidtitle">
                Webinar on Cyber Security and its Applications
              </h5>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <p className="vidtext">
                Please note: These names are just ideas. If you want to use one
                of them, it's up to you to check whether or not a publication
                with the same title already exists.
              </p>
            </div>
          </div>
        </section>
        <section className="mainvideo">
          <div className="container">
            <div className="row justify-content-center">
              <iframe
                className="mainvideolink"
                src="https://www.youtube.com/embed/dAqthtQvep4"
                frameBorder={0}></iframe>
            </div>
          </div>
          <div className="conatiner">
            <div className="row justify-content-center">
              <h5 className="vidtitle">
                Webinar on Cyber Security and its Applications
              </h5>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <p className="vidtext">
                Please note: These names are just ideas. If you want to use one
                of them, it's up to you to check whether or not a publication
                with the same title already exists.
              </p>
            </div>
          </div>
        </section>
        <section className="mainvideo">
          <div className="container">
            <div className="row justify-content-center">
              <iframe
                className="mainvideolink"
                src="https://www.youtube.com/embed/dAqthtQvep4"
                frameBorder={0}></iframe>
            </div>
          </div>
          <div className="conatiner">
            <div className="row justify-content-center">
              <h5 className="vidtitle">
                Webinar on Cyber Security and its Applications
              </h5>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <p className="vidtext">
                Please note: These names are just ideas. If you want to use one
                of them, it's up to you to check whether or not a publication
                with the same title already exists.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Videos;
