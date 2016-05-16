import React from 'react'

// Burger menu
export default ({ onClick }) => (
  (
    <element className="nav-toggle" onClick={ onClick } >
      <i className="fa fa-bars"></i>
      <span>MENU</span>
    </element>
  )
)