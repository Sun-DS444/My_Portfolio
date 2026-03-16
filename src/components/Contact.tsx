import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Contact Info</h4>
            <p>
              <a href="mailto:surajpaliwal9929@gmail.com" data-cursor="disable">
                Email: surajpaliwal9929@gmail.com
              </a>
            </p>
            <p>Phone: +91 9950379711</p>
            <p>Location: Udaipur, Rajasthan</p>
            <p className="contact-status">Open to Relocate & Work From Home</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/Sun-DS444"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/suraj-paliwal-646b15214"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://suraj-paliwal-portfolio.com" 
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Suraj Paliwal - Portfolio <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Suraj Paliwal</span>
            </h2>
            <h5>
              <MdCopyright /> 2025
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
