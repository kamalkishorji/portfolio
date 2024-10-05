import React from "react";
import "./About.css";
import profile_rectangle from "../../assets/profile_rectangle.png";
import about_icon from "../../assets/about_icon.svg";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={about_icon} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_rectangle} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a Full Stack Developer with 4+ years of experience,
              specializing in Node.js. I have extensive experience in developing
              and deploying websites utilizing various open-source packages.
            </p>
            <p>
              I am proficient in HTML, CSS, JavaScript, and TypeScript, and I
              have worked with frameworks such as Node.js, Express.js, React.js,
              AngularJS, and MongoDB. My expertise includes developing web
              applications based on Single Page Application (SPA) architectures.
              In addition, I am skilled in troubleshooting problems and
              resolving bugs within existing systems.
            </p>
            <p>
              I have experience with AWS for cloud services, Git for version
              control, and CI/CD practices to streamline development workflows.
              My knowledge extends to Firebase for real-time database solutions,
              Elasticsearch for powerful search capabilities, and NestJS for
              building efficient and scalable server-side applications.
            </p>
            <p>
              My specialties include quickly learning new skills and programming
              languages, problem-solving, domain-driven design, responsive
              design principles, website optimization, and using the Model View
              Controller (MVC) methods to organize code effectively.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p> <hr style={{ width: "30%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p> <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript</p> <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>Typescript</p> <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Node JS</p> <hr style={{ width: "750%" }} />
            </div>
            <div className="about-skill">
              <p>Express JS</p> <hr style={{ width: "78%" }} />
            </div>
            <div className="about-skill">
              <p>Nest JS</p> <hr style={{ width: "80%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievments">
        <div className="about-achievment">
          <h1>4+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievment">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievment">
          <h1>7+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
