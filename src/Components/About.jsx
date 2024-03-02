import React from "react";
import image from "../images/1799094276-64cc14bbbab00f4163e8a39475a2f2025a4b0164478b440d6075848a80ae56b0-d.jpg";
import qrCodeImage from "../images/微信图片_20240225152105.jpg"; // Replace with your QR code image path
import image1 from "../images/image1.png"

const imageAltText = "purple and blue abstract background";

const description =
  "持续更新 Open AI 的 Sora 模型相关研究报告，赚钱案例，\
  实用技术等板块内容永久教学，和 50W+读者共同无限进步。";

const detailOrQuote = "Think Different.";

const About = () => {
  // Click event handler for each skill
  const handleSkillClick = (skill) => {
    // Replace with logic to handle clicking on each skill
    console.log(`Clicked on ${skill}`);
  };

  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "70%",
          padding: "4rem",
          margin: "1rem auto",
          textAlign: "center",
          position: "relative", // Position relative for absolute positioning of QR code
        }}
      >
      
        <h2>Sora技术路线</h2>
        <p className="large">{description}</p>
        <hr />
<div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px", padding: "0 3rem" }}>
  {/* Four clickable images */}
  <a href="跳转的网页链接" style={{ position: "relative", display: "inline-block" }}>
              <img src={image1} alt="提示词学习" style={{ width: "45%", height: "200px" }} />
              <span style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontSize: "20px", fontWeight: "bold", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>提示词学习</span>
            </a>
  <img src={image1} alt="ChatGPT专业优化" onClick={() => handleSkillClick("ChatGPT专业优化")} style={{ width: "250px", height: "200px" }} />
  <img src={image1} alt="Ai绘画基础" onClick={() => handleSkillClick("Ai绘画基础")} style={{ width: "250px", height: "200px" }} />
  <img src={image1} alt="输出结果微调" onClick={() => handleSkillClick("输出结果微调")} style={{ width: "250px", height: "200px" }} />
</div>
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
