import React from "react";
import "./Contact.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Contact = () => {
  return (
    <section id="contact">
      <div className="wrapper">
        <span>BE IN TOUCH WITH US:</span>
        <div className="mail">
          <input type="text" placeholder="Enter your e-mail" />
          <button>JOIN US</button>
        </div>
        <div className="icons">
          <span className="icon">
            <InstagramIcon />
          </span>
          <span className="icon">
            <FacebookIcon />
          </span>
          <span className="icon">
            <TwitterIcon />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
