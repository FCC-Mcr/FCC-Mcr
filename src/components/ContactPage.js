import React from 'react';

/*
  ContactPage component
*/
const ContactPage = () => (
  (
    <div className="fill">
      <div className="content-box">
        FreeCodeCamp Manchester meet monthly at the <a href="https://codeupmcr.co.uk">
          CodeUp Manchester
        </a> meetUp. Alternatively you can reach us on our slack channel.
        <div className="row contact-links">
          <div className="col col-xs-6">
            <a href="https://fcc-mcr-invite.herokuapp.com/">
              <i className="fa fa-slack"></i>
              slack
            </a>
          </div>
          <div className="col col-xs-6">
            <a href="https://codeupmcr.co.uk">
              <i className="fa fa-code"></i>
              CodeUp
            </a>

          </div>
        </div>
      </div>
    </div>
  )
);

export default ContactPage;
