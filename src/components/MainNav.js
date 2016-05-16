import React from 'react'

// Main Navigation panel
// TODO: generate page items
export default ({ open }) => (
  (
    <nav className={ open ? "main-nav open" : "main-nav"}>
      <div className="nav nav-stacked">
        <div className="nav-item">
          <a href="#" className="nav-link">HOME<i className="fa fa-home"></i></a>
        </div>
        <div className="nav-item">
          <a href="#" className="nav-link">RESOURCES<i className="fa fa-wrench"></i></a>
        </div>
        <div className="nav-item">
          <a href="#" className="nav-link">ABOUT US<i className="fa fa-users"></i></a>
        </div>
        <div className="nav-item">
          <a href="#" className="nav-link">CONTACT<i className="fa fa-envelope-o"></i></a>
        </div>
      </div>
    </nav>
  )
)