import React from 'react';

/*
  AboutPage component
*/
const AboutPage = () => (
  (
    <div className="fill">
      <div className="about-banner">
        <img src="./src/assets/first.jpg"  />
      </div>
      <div className="content-box">
        <h3>We are...</h3>
        <p>
          A collection of Learners, Coders and Members of the Manchester FreeCodeCamp
           users group working together to:
        </p>
        <ul>
          <li>Build things.</li>
          <li>Share Resources.</li>
          <li>Progress along the FCC curriculum.</li>
          <li>Learn.</li>
          <li>become better programmers be it for fun or a change of career.</li>
        </ul>
        <p>
          The purpose of this site is to further pursue those goals.
        </p>
      </div>
    </div>
  )
);

export default AboutPage;
