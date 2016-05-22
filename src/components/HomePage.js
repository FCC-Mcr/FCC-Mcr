import React from 'react';

/*
  A fixed aspect ratio box on the home page
*/
const HomePageBox = () => (
  (
    <div className="menu-square-container">
      <div className="menu-square">
        <span>ABOUT US</span>
      </div>
    </div>
  )
);


/*
  HomePage component
*/
const HomePage = () => (
  (
    <div className="fill home-page">
      <HomePageBox />
      <HomePageBox />

    </div>
  )
);

export default HomePage;
