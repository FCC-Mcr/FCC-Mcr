import React from 'react';
import { Link } from 'react-router';
/*
  A fixed aspect ratio box on the home page
  types => square, title, wide
*/
const HomePageBox = ({ linkUrl, type, children }) => (
  (
    <div className={"box-" + type}>
      <Link className="fill" to={linkUrl}>
        <div className="hero">
          { children }
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
      <div className="home-wrap">
      
        <HomePageBox linkUrl="/" type="title">
          <span>Free Code Camp Manchester</span>
        </HomePageBox>
        
        <HomePageBox content="about us" linkUrl="/about" type="square">
          <span>about us</span>
        </HomePageBox>
        
        <HomePageBox content="contact" linkUrl="/contact" type="square">
          <span>contact</span>
        </HomePageBox>

        <HomePageBox content="learning resources" linkUrl="/resources" type="wide">
          <span>learning resources</span>
        </HomePageBox>

      </div>
      
    </div>
  )
);

export default HomePage;
