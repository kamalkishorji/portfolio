import React, { useState, useRef } from "react";
import "./navbar.css";
import logo from "../../assets/logo.svg";
import underline_icon from "../../assets/underline_icon.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import close_icon from "../../assets/close_icon.svg";
import menu_open_icon from "../../assets/burger-list-menu.svg";

const Navbar = () => {
  const [menu, setMenue] = useState("home");
  const myref = useRef();

  const openMenue = () => {
    myref.current.style.right = "0";
  };

  const closeMenue = () => {
    myref.current.style.right = "-350px";
  };
  return (
    <div className="navbar">
      {/* <img src={logo} alt='' /> */}
      <img
        src={menu_open_icon}
        alt=""
        className="nav-mob-open"
        onClick={openMenue}
      />
      <p className="name">Kamal</p>
      <ul className="nav-menu" ref={myref}>
        <img
          src={close_icon}
          alt=""
          className="nav-mob-close"
          onClick={closeMenue}
        />
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#home">
            {" "}
            <p onClick={() => setMenue("home")}>Home</p>
            {menu == "home" ? <img src={underline_icon} alt="" /> : <></>}
          </AnchorLink>
        </li>
        <li>
          {" "}
          <AnchorLink className="anchor-link" offset={50} href="#about">
            {" "}
            <p onClick={() => setMenue("about")}>About Me</p>
            {menu == "about" ? <img src={underline_icon} alt="" /> : <></>}
          </AnchorLink>
        </li>
        <li>
          {" "}
          <AnchorLink className="anchor-link" offset={50} href="#services">
            {" "}
            <p onClick={() => setMenue("services")}>Services</p>
            {menu == "services" ? <img src={underline_icon} alt="" /> : <></>}
          </AnchorLink>
        </li>
        <li>
          {" "}
          <AnchorLink className="anchor-link" offset={50} href="#work">
            {" "}
            <p onClick={() => setMenue("work")}>Portfolio</p>
            {menu == "work" ? <img src={underline_icon} alt="" /> : <></>}
          </AnchorLink>
        </li>
        <li>
          {" "}
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            {" "}
            <p onClick={() => setMenue("contact")}> Contact</p>
            {menu == "contact" ? <img src={underline_icon} alt="" /> : <></>}
          </AnchorLink>
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          <p onClick={() => setMenue("contact")}> Connect with me </p>
        </AnchorLink>{" "}
      </div>
    </div>
  );
};

export default Navbar;
