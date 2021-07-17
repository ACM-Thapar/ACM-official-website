import React from 'react';

const Blogs = () => {
  return (
    <div>
      {/* Switch section */}
      <section className="bvswitch">
        <div className="container">
          <div className="row">
            <div className="col-md-3" />
            <div className="col-md-4">
              <h4 className="blogswitch">BLOGS</h4>
            </div>
            <div className="col-md-4">
              <h4 className="videoswitch">VIDEOS</h4>
            </div>
          </div>
        </div>
      </section>
      <section className="recent">
        <div className="container">
          <div className="row justify-content-center">
            <h1 className="recentb">Recent Blogs</h1>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row justify-content-center">
          <p className="recentp">
            Read the latest blogs from the content team of ACM Thapar.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <h3 className="latestb">Latest Upload</h3>
        </div>
      </div>
      {/* Main Blog Display */}
      <section className="latestupload">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img
                src="https://res.cloudinary.com/kriti711/image/upload/v1626162634/ACM%20Website/image_6_e2cfic.svg"
                alt="main blog image"
                className="mainblogimg"
              />
            </div>
            <div className="col-md-8">
              <h2 className="mbtitle">
                A Rose By Any Other Name Would Smell As Eat.
              </h2>
              <p className="latestsubtext small">
                <em>
                  Derived from expression A rose by any other name would smell
                  as sweet substituting 'sweet' with 'eat'.
                </em>
              </p>
              <p className="mbtext">
                Please note: These names are just ideas. If you want to use one
                of them, it's up to you to check whether or not a publication
                with the same title already exists.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Cards of blogs */}
      <section className="cardarea blogs-page-card-area">
        <div className="container">
          <div className="row justify-content-center">
            <h3 className="mightlike">You might also like</h3>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card bcard leftcardb" style={{ width: '20rem' }}>
                <img
                  src="https://res.cloudinary.com/kriti711/image/upload/v1626162634/ACM%20Website/image_6_e2cfic.svg"
                  className="card-img-top bcardimg"
                  alt="Blog Image"
                />
                <div className="card-body">
                  <h5 className="card-title bcardtitle">
                    A Rose By Any Other Name Would Smell As Eat.
                  </h5>
                  <p className="cardsubtext small">
                    <em>
                      Derived from expression A rose by any other name would
                      smell as sweet substituting 'sweet' with 'eat'.
                    </em>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card bcard midcardb" style={{ width: '20rem' }}>
                <img
                  src="https://res.cloudinary.com/kriti711/image/upload/v1626162634/ACM%20Website/image_6_e2cfic.svg"
                  className="card-img-top bcardimg"
                  alt="Blog Image"
                />
                <div className="card-body">
                  <h5 className="card-title bcardtitle">
                    A Rose By Any Other Name Would Smell As Eat.
                  </h5>
                  <p className="cardsubtext small">
                    <em>
                      Derived from expression A rose by any other name would
                      smell as sweet substituting 'sweet' with 'eat'.
                    </em>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card bcard rightcardb" style={{ width: '20rem' }}>
                <img
                  src="https://res.cloudinary.com/kriti711/image/upload/v1626162634/ACM%20Website/image_6_e2cfic.svg"
                  className="card-img-top bcardimg"
                  alt="Blog Image"
                />
                <div className="card-body">
                  <h5 className="card-title bcardtitle">
                    A Rose By Any Other Name Would Smell As Eat.
                  </h5>
                  <p className="cardsubtext small">
                    <em>
                      Derived from expression A rose by any other name would
                      smell as sweet substituting 'sweet' with 'eat'.
                    </em>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
