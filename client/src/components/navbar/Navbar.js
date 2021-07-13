import React from 'react';
import logo from '../../images/logo.svg';
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg shift fixed-top navbar-light bg-light">
        <a className="navbar-brand acmlogonav" href="./index.html">
          <img src={logo} alt="ACM Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="col-md-4" />
        <div className="col-md-3" />
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="./team.html">
                Team
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./project.html">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./event.html">
                Events
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./blogs.html">
                Blogs
              </a>
            </li>
            <li className="nav-item main">
              <a className="nav-link" href="#">
                Achievements
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
