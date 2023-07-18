import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="top">
        <div className="left">
          <div className="item">
            <h1>Categories</h1>
            <span>Women</span>
            <span>Men</span>
            <span>Shoes</span>
            <span>Accessories</span>
            <span>New Arrivals</span>
          </div>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            ullam voluptatibus porro tenetur alias modi odio! Iure unde,
            aperiam, ipsa exercitationem ratione, eligendi quaerat quisquam
            saepe aut quam nesciunt temporibus?
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur quae dicta ab voluptatum molestiae cum repellendus!
            Minus nostrum soluta quod adipisci saepe debitis, dolor harum neque
            exercitationem accusamus. Ut, optio!
          </span>
        </div>
      </div>
        <div className="bottom">
          <section className="left">
            <span className="logo">JITSTORE</span>
            <span className="copyright">
              &#169; Copyight 2023. All rights Reserved
            </span>
          </section>
          <section id="payment-options">
            <img src="/img/payment.png" alt="payment options" />
          </section>
        </div>
    </footer>
  );
};

export default Footer;
