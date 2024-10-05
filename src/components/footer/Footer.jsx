import React from "react";
import "./footer.css";
import footer_icon from "../../assets/footer_icon.svg";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          {/* <img src={footer_icon} alt="" /> */}
          <h2>Kamal</h2>
          <p>I am a full stack developer from india</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          @ 2024 kamal kishor all right reserved
        </p>
        <div className="footer-bootom-right">
          <p>Terms of services</p>
          <p>Privacy policy </p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

//project image : 385x257, profile rectangle : 380x403 profile circle : 240x240
