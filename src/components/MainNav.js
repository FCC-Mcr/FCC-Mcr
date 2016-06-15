import React from 'react';
import { Link } from 'react-router';

/*
  Main Navigation panel with router links
*/
// TODO: generate page items
const MainNav = ({ open, onClick }) => (
  (
    <nav className={ open ? "main-nav open" : "main-nav"}>
      <div className="nav nav-stacked">
        <div className="nav-item" onClick={ onClick }>
          <Link to="/" className="nav-link">HOME<i className="fa fa-home"></i></Link>
        </div>
        <div className="nav-item" onClick={ onClick }>
          <Link to="/resources" className="nav-link">RESOURCES<i className="fa fa-wrench"></i></Link>
        </div>
        <div className="nav-item" onClick={ onClick }>
          <Link to="about" className="nav-link">ABOUT US<i className="fa fa-users"></i></Link>
        </div>
        <div className="nav-item" onClick={ onClick }>
          <Link to="contact" className="nav-link">CONTACT<i className="fa fa-envelope-o"></i></Link>
        </div>
      </div>
    </nav>
  )
);

export default MainNav;
