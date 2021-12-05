import React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';
import BlogCard from './BlogCard';
import { Link } from 'react-router-dom';
import MainBlog from './MainBlog';


const Blogs = () => {

  let [data, setData] = useState([]);

  useEffect(() => {
   
      axios.get("https://acm-official-website.herokuapp.com/blog")
      .then((response) => {
        setData(response.data);
      });
 
      
  },[])

    console.log('check - ',data[0]);
  return (
    <>
      {/* Switch section */}
      <section className="bvswitch">
        <div className="container">
          <div className="row">
            <div className="col-md-3" />
            <div className="col-md-4">
              <Link to="/videos">
                <h4 className="blogswitch">BLOGS</h4>
              </Link>
            </div>
            <div className="col-md-4">
              <Link to="/videos">
                <h4 className="videoswitch">VIDEOS</h4>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <center>
        <section className="recent">
          <div className="container">
            <div className="row justify-content-center">
              <center>
                <h1 className="recentb">Recent Blogs</h1>
              </center>
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
      </center>
      <center>
        <div className="container">
          <div className="row justify-content-center">
            <h3 className="latestb">Latest Upload</h3>
          </div>
        </div>
      </center>
      {/* Main Blog Display */}
      <section className="latestupload">
          <MainBlog data = {data && data[0]} />
      </section>
      {/* Cards of blogs */}
      <section className="cardarea blogs-page-card-area">
        <div className="container">
          <div className="row justify-content-center">
            <center>
              <h3 className="mightlike">You might also like</h3>
            </center>
          </div>
          <div className="row">
            {data && data.map(blog => <BlogCard blog ={blog}/>)}
            
            </div>
          </div>

      </section>
    </>
  );
};

export default Blogs;
