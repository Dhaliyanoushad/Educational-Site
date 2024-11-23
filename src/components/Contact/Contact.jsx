import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import warrow from "../../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7d14eed3-9054-4dd2-81ee-8c4963a49e4e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send Us a Message <img src={msg_icon} alt="" />
        </h3>
        <p>
          We'd love to hear from you! Whether you have questions, feedback, or
          just want to share your thoughts, feel free to reach out to us. Simply
          fill in your details and drop us a message below, and we'll get back
          to you as soon as possible. Your input helps us improve and serve you
          better!
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            Contact@kadalthavala@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +9 09098738239
          </li>
          <li>
            <img src={location_icon} alt="" />
            Alakananda Hostel For Girls
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter Your Mobile Number"
            required
          />
          <label>Write Your messages here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter Your name"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit Now <img src={warrow} alt="" className="w-[20px] ml-4" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
