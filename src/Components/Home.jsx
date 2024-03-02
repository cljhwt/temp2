import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

import image from "../images/微信图片_20240210114747.jpg";

const videoSrc = "https://cdn.openai.com/tmp/s/paper-planes.mp4";
const imageAltText = "首页头图，保持更新";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height">
      <video className="background" autoPlay loop muted style={{ display: "block", margin: "0 auto" }}>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: "white", fontFamily: "Microsoft YaHei, Arial, sans-serif", textAlign: "center" }}>
        <h1>{name}</h1>
        <h2>{title}</h2>
      </div>
      <div style={{ position: "absolute", bottom: "3rem", left: "50%", transform: "translateX(-50%)" }}>
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt={imageAltText} />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
