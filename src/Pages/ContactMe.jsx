import React from "react";

const ContactMe = () => {
  return (
    <section id="contact-me" className="contact--section">
      <div>
        <h1 className="contact--title">Contact Me</h1>
        {/* <p className="sub--title">Get In Touch</p> */}
        <p className="text-lg">
          This feature is being developed. You wont be able send an email as of
          now. Try messaging me on my{" "}
          <a href="https://www.linkedin.com/in/shashannkd/">Linkedin</a>{" "}
          instead. Thank You :)
        </p>
      </div>
      <form className="contact--form--container">
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md label-text">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md label-text">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              required
            />
          </label>
        </div>
        <label htmlFor="email" className="contact--label">
          <span className="text-md label-text">Email</span>
          <input
            type="email"
            className="contact--input text-md"
            name="email"
            id="email"
            required
          />
        </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md label-text">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            placeholder="Type your message..."
          />
        </label>

        <div>
          <button className="btn btn-primary contact--form--btn">Submit</button>
        </div>
      </form>
    </section>
  );
};

export default ContactMe;
