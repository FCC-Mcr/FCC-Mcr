import React from 'react';

/*
  Burger menu
*/
// TODO: remove fa and animate open close - burger to X
const NavToggle = ({ onClick }) => (
  (
    <element className="nav-toggle" onClick={ onClick } >
      <i className="fa fa-bars"></i>
      <span>MENU</span>
    </element>
  )
);

export default NavToggle;
