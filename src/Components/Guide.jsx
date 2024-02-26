import React from "react";
import image from "../images/小红书.jpg";

const imageAltText = "desktop with books and laptop";

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>任何问题，欢迎关注</h2>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "100%", width: "400px" }}>
          <img
            src={image}
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
