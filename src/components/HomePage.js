import React from 'react';
import { Link } from 'react-router';
/*
  A fixed aspect ratio box on the home page
*/
const HomePageBox = ( {content, linkUrl} ) => (
  (
    <div className="menu-square-container">
      <Link className="fill" to="/about">
        <div to={ linkUrl } className="menu-square">
          <span>{ content }</span>
        </div>
      </Link>
    </div>
  )
);


/*
  HomePage component
*/
const HomePage = () => (
  (
    <div className="fill home-page">
      <HomePageBox content={"ABOUT US"} linkUrl={"/about"} />
      
    </div>
  )
);

export default HomePage;
