import React from "react";
import "./services.css";
import about_icon from "../../assets/about_icon.svg";

const servicesData = [
  {
    s_no: "01",
    name: "Custom MERN Web Application Development",
    desc: "Develop tailored web applications using MongoDB, Express.js, React, and Node.js.",
  },
  {
    s_no: "02",
    name: "RESTful API Development",
    desc: "Create robust and scalable RESTful APIs using Node.js and Express.",
  },
  {
    s_no: "03",
    name: "Frontend Development with React",
    desc: "Build responsive user interfaces using React.js, ensuring optimal user experience.",
  },
  {
    s_no: "04",
    name: "Backend Development with Node.js",
    desc: "Implement server-side logic and database management with Node.js and MongoDB.",
  },
  {
    s_no: "05",
    name: "MERN Stack Integration",
    desc: "Seamlessly integrate all components of the MERN stack for full application functionality.",
  },
  {
    s_no: "06",
    name: "User Authentication and Authorization",
    desc: "Implement secure user authentication and role-based access control in MERN applications.",
  },
  {
    s_no: "07",
    name: "E-commerce Platform Development",
    desc: "Develop fully functional e-commerce websites using the MERN stack.",
  },
  {
    s_no: "08",
    name: "Real-Time Web Applications",
    desc: "Create real-time applications with WebSocket and MERN technologies.",
  },
  {
    s_no: "09",
    name: "Deployment and Hosting Services",
    desc: "Deploy and host MERN applications on platforms like Heroku, AWS, or DigitalOcean.",
  },
  {
    s_no: "10",
    name: "Performance Optimization",
    desc: "Optimize MERN applications for better speed, performance, and user experience.",
  },
  {
    s_no: 11,
    name: "Progressive Web Apps (PWAs)",
    desc: "Develop high-performance Progressive Web Apps using the MERN stack for offline access.",
  },
  {
    s_no: 12,
    name: "Unit and Integration Testing",
    desc: "Implement comprehensive unit and integration testing for MERN applications to ensure quality.",
  },
];

const Services = () => {
  return (
    <div className="services" id="services">
      <div className="services-title">
        <h1>My services</h1>
        <img src={about_icon} alt="" />
      </div>
      <div className="services-container">
        {servicesData.map((item, idx) => {
          return (
            <div className="services-format" key={idx}>
              <h3>{item.s_no}</h3>
              <h2>{item.name}</h2>
              <p>{item.desc}</p>
              {/* <div className="service-readmore">
              <p>Read More</p>
              <img src="" alt="arrow icon" />
            </div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
