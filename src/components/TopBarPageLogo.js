import React from 'react'

/*
  Logo for top bar pages on mobile displays
*/
export default ({ currPage }) => (
  (
    <div className="title-wrap">
      <span>FCC Mcr</span>
      <span className="curr-page">{ currPage }</span>
    </div>
  )
)