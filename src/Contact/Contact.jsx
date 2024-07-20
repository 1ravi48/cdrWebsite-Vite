import "./Contact.css";
import { useState } from "react";
import nameIcon from "../assets/images/name-icon.svg";
import emailIcon from "../assets/images/email-icon.svg";
import messageIcon from "../assets/images/message-icon.svg";
import sendIcon from "../assets/images/send-icon.svg";
import fiverrIcon from "../assets/images/icon-fiverr.svg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Add form submission logic here
  };

  return (
    <>
      <section id="contact">
        <h2>Contact Us</h2>
        <p>
          Ready to elevate your business? <br />
          <br />
          We are here to help! Reach out today to discuss how we can make your
          online presence shine. We are excited to hear your ideas and achieve
          your goals together!
        </p>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <label htmlFor="name">
                <img className="form-icon" src={nameIcon} alt="name-icon" />{" "}
                Name:
              </label>
            </div>
            <div className="input-group">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label htmlFor="email">
                <img className="form-icon" src={emailIcon} alt="email-icon" />{" "}
                Email:
              </label>
            </div>
            <div className="input-group">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <label htmlFor="message">
                <img
                  className="form-icon"
                  src={messageIcon}
                  alt="message-icon"
                />{" "}
                Message:
              </label>
            </div>
            <button type="submit">
              SUBMIT{" "}
              <img className="form-icon" src={sendIcon} alt="send-icon" />
            </button>
          </form>
        </div>
        <p className="contact-footer">
          Alternatively, reach out on{" "}
          <a href="https://www.fiverr.com">
            <img className="fiverr-icon" src={fiverrIcon} alt="fiverr-icon" />
          </a>
        </p>
      </section>
    </>
  );
};

export default Contact;
