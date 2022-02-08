import React from 'react';
import { Link } from 'react-router-dom';

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
                {/* <Link to="/blogs">
                  <h4 className="vblogswitch">BLOGS</h4>
                </Link>
              </div>
              <div className="col-md-4">
                <Link to="/videos">
                  <h4 className="vvideoswitch">VIDEOS</h4>
                </Link> */}
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
                src="https://www.youtube.com/embed/_eJ_vuOo3XI"
                frameBorder={0}></iframe>
            </div>
          </div>
          <div className="conatiner">
            <div className="row justify-content-center">
              <h5 className="vidtitle">All about Google Hash Code</h5>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <p className="vidtext">
                Thapar ACM Student Chapter conducted a Live Coding Session on
                Google Hashcode 2022 Practice session to give its members and
                freshers a head-start in the Approximation based contests.
                Members were introduced with maps, set, pairs and general idea
                to approach any coding problem
              </p>
            </div>
          </div>
        </section>
        <section className="mainvideo">
          <div className="container">
            <div className="row justify-content-center">
              <iframe
                className="mainvideolink"
                src="https://www.youtube.com/embed/N8lOqeIU6XQ"
                frameBorder={0}></iframe>
            </div>
          </div>
          <div className="conatiner">
            <div className="row justify-content-center">
              <h5 className="vidtitle">DSA and Career Guidance</h5>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <p className="vidtext">
                ACM Thapar is in collaboration with GFG brings a exclusive
                Workshop on Introduction to DSA and Career Guidance that gives
                your career a head-start and know how you can get closer to your
                dream job by refining your coding skills.
              </p>
            </div>
          </div>
        </section>
        <section className="mainvideo">
          <div className="container">
            <div className="row justify-content-center">
              <iframe
                className="mainvideolink"
                src="https://www.youtube.com/embed/iLD96jMw_28"
                frameBorder={0}></iframe>
            </div>
          </div>
          <div className="conatiner">
            <div className="row justify-content-center">
              <h5 className="vidtitle">
                Alumni Session #3-Transitioning From College Life to
                Professional Life
              </h5>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <p className="vidtext">
                Welcome to Thapar University. As a fresher, stepping into
                university can be daunting. Knowing this, Thapar ACM Student
                Chapter is conducting an Alumni Interactive Session on 16th
                October, "Journey from Fresher to Corporate Professional." to
                answer your questions and provide guidance. The speakers from
                the batch of 2021 joining us are Mr. Varun Singla, who is
                working at Siemens Software, Mr. Harman Banga, who is working at
                Futures First, and Mr. Shaurya Thakur, who is working at
                Growisto.
              </p>
            </div>
          </div>
        </section>
        <section className="mainvideo">
          <div className="container">
            <div className="row justify-content-center">
              <iframe
                className="mainvideolink"
                src="https://www.youtube.com/embed/BEB0iz-AGzA"
                frameBorder={0}></iframe>
            </div>
          </div>
          <div className="conatiner">
            <div className="row justify-content-center">
              <h5 className="vidtitle">
                Coding Induction for the batch of 2025 with Coding Ninjas
              </h5>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <p className="vidtext">
                Youth encompassed with appropriate technology holds the
                potential to revolutionize the world we perceive today.
                Forwarding this vision, ACM Thapar in Collaboration with Coding
                Ninjas conducts "Mindscape," a six-day long CTF-type event where
                students would be required to solve various problems while
                putting their skills to the test. Held annually, Mindscape is a
                way to welcome the upcoming freshers of Thapar University and
                introduce Thapar ACM Student Chapter to them. Starting with the
                very first event CODING INDUCTION. Get the guidance from
                Industry expert working at Microsoft.
              </p>
            </div>
          </div>
        </section>

        <section className="mainvideo">
          <div className="container">
            <div className="row justify-content-center">
              <iframe
                className="mainvideolink"
                src="https://www.youtube.com/embed/EoO8feTdr8M"
                frameBorder={0}></iframe>
            </div>
          </div>
          <div className="conatiner">
            <div className="row justify-content-center">
              <h5 className="vidtitle">
                Alumni Session#2-QnA by Mr.Varun Aggarwal
              </h5>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <p className="vidtext">
                QnA session on interview experience by Mr. Varun Aggarwal
              </p>
            </div>
          </div>
        </section>
        <section className="mainvideo">
          <div className="container">
            <div className="row justify-content-center">
              <iframe
                className="mainvideolink"
                src="https://www.youtube.com/embed/lLV5ECXmpyA"
                frameBorder={0}></iframe>
            </div>
          </div>
          <div className="conatiner">
            <div className="row justify-content-center">
              <h5 className="vidtitle">
                Alumni Session#1 - Internship/Placement by Mr. Varun Singla
              </h5>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <p className="vidtext">
                Alumni interaction with Mr. Varun Singla
              </p>
            </div>
          </div>
        </section>
        <section className="mainvideo">
          <div className="container">
            <div className="row justify-content-center">
              <iframe
                className="mainvideolink"
                src="https://www.youtube.com/embed/yutt78PVAQ0"
                frameBorder={0}></iframe>
            </div>
          </div>
          <div className="conatiner">
            <div className="row justify-content-center">
              <h5 className="vidtitle">DevTalk#1-GNU/Linux</h5>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <p className="vidtext">
                A DevTalk on the benefits of GNU/Linux and why developers prefer
                it
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Videos;
