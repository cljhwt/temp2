import React from "react";
import image from "../images/1799094276-64cc14bbbab00f4163e8a39475a2f2025a4b0164478b440d6075848a80ae56b0-d.jpg";
import qrCodeImage from "../images/微信图片_20240225152105.jpg"; // Replace with your QR code image path

const imageAltText = "purple and blue abstract background";

const description =
  "I'm an AI student studying at University of Science and Technology Beijing. I enjoy working and progressing with AIGC.";

const skillsList = [
  "Computer Vision",
  "Inclusive design",
  "Mobile user interfaces",
  "Graphic design",
];

const detailOrQuote = "Think Different.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
          position: "relative", // Position relative for absolute positioning of QR code
        }}
      >
        <h2>Sora技术路线</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
      {/* QR Code Area */}
      <div
          style={{
            position: "absolute",
            bottom: "2rem",
            right: "0rem",
            border: "0px solid #ddd",
            padding: "1rem",
            borderRadius: "8px",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            width: "30%",  // 设置宽度为 30%
          }}
        >
          <img
            src={qrCodeImage}
            alt="QR Code"
            style={{ width: "70%", height: "auto" }}
          />
        </div>
    </section>
  );
};

export default About;
