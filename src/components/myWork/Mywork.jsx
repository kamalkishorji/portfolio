import React from "react";
import "./mywork.css";
import about_icon from "../../assets/about_icon.svg";
import show_more_icon from "../../assets/show_more_icon.svg";
import indyrent from "../../assets/indyrent.png";
import indyrent_admin from "../../assets/indyrent_admin.png";
import enalito from "../../assets/enalito.png";
import growloc from "../../assets/growloc.png";
import polyhouse from "../../assets/polyhouse.png";
import graph from "../../assets/graph.png";

const workData = [
  {
    w_no: 1,
    w_name: "Indyrent v2",
    w_image: indyrent,
  },
  {
    w_no: 2,
    w_name: "Indyrent Admin",
    w_image: indyrent_admin,
  },
  {
    w_no: 3,
    w_name: "Enalito",
    w_image: enalito,
  },
  {
    w_no: 4,
    w_name: "Poyhouse",
    w_image: polyhouse,
  },
  {
    w_no: 5,
    w_name: "Harvest breakup",
    w_image: graph,
  },
  {
    w_no: 6,
    w_name: "Growloc",
    w_image: growloc,
  },
];

const Mywork = () => {
  return (
    <div className="myWork" id="work">
      <div className="myWork-title">
        <h1>My lattest work</h1>
        <img src={about_icon} alt="" />
      </div>
      <div className="myWork-container">
        {workData.map((item, idx) => {
          return <img key={idx} src={item.w_image} alt="" />;
        })}
      </div>
      <div className="myWork-showmore">
        <p>Show more</p>
        <img src={show_more_icon} alt="" />
      </div>
    </div>
  );
};

export default Mywork;
