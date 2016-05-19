import React from 'react';
// sub components
import TopBarHomeLogo from './TopBarHomeLogo';
import TopBarPageLogo from './TopBarPageLogo';

/*
  Global top-bar for use on mobile sized screens
  TODO: alter Logo based on current page.
*/
const TopBar = () => (
  (
    <div className="top-bar">
      <TopBarHomeLogo currPage={"RESOURCES"}/>
    </div>
  )
);

export default TopBar;
