import React from "react";
import bg2 from "../images/bg2.jpg";
import "../style/Contact.css"

function Contact() {
  return (
    <div className="contact-container-main">
      {/* <img className="contact-img" src={bg2} alt="" /> */}
      <div className="contact-container">
        <h1>Contact Us</h1>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div>
          <label for="exampleFormControlInput1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Feedback
          </label>
          <textarea
            class="form-control"
            // id="exampleFormControlTextarea1"
            rows="6"
            name="message"
            // required
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </div>
  );
}

export default Contact;
