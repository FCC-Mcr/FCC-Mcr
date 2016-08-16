import React from 'react';

/*
  AboutPage component
*/
const AboutPage = () => (
  (
    <div className="fill">
      <div className="about-banner"></div>
      <div className="content-box">
      <div className="content-box--left">
        <h3>We are...</h3>
        <p>
          A collection of Learners, Coders and Members of the Manchester FreeCodeCamp
           users group working together to:
        </p>
        <ul>
          <li>Build things.</li>
          <li>Share Resources.</li>
          <li>Learn cool stuff.</li>
          <li>Progress along the FCC curriculum.</li>
          <li>Become better programmers, be it for fun or a change of career.</li>
        </ul>
        <br></br>
        <p>
          <strong>We'd love for you to join us in the pursuit of these goals.</strong>
        </p>
        <a href="https://fcc-mcr-invite.herokuapp.com/">
          <i className="fa fa-slack"></i>
          slack
        </a>
        <a href="https://codeupmcr.co.uk">
          <i className="fa fa-code"></i>
          CodeUp
        </a>
      </div>
      <div className="content-box--right">
        <img className="about-image" src="/src/assets/first.jpg" alt="FCC study group in session at Code-Up"></img>
      </div>
      </div>
    </div>
  )
);

export default AboutPage;
