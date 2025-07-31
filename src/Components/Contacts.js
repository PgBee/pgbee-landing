import React from "react";

const Contact = () => {
  const email = 'pgbee.company@gmail.com';

  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Have Question In Mind?</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="yourmail@gmail.com" />
        <a href={`mailto:${email}`} className="secondary-button">Submit</a>
      </div>
    </div>
  );
};

export default Contact;