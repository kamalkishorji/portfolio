import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./hero.css";
import prifile_circle from "../../assets/prifile_circle.png";

const Hero = () => {
  return (
    <div className="hero" id="home">
      <img src={prifile_circle} alt="" />

      <h1>
        <span>I'm kamal kishor,</span> full stack developer based in India.
      </h1>
      <p>
        I am a full stack developer from Samastipur, Bihar, India with 4+ years
        of experience
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            {" "}
            Connect with me{" "}
          </AnchorLink>{" "}
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
