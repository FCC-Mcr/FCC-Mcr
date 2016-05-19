import React from 'react';

/*
  Logo for top bar pages on mobile displays
*/
const TopBarPageLogo = ({ currPage }) => (
  (
    <div className="title-wrap">
      <span>FCC Mcr</span>
      <span className="curr-page">{ currPage }</span>
    </div>
  )
);

export default TopBarPageLogo;
