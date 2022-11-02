import React from "react";
import Image1 from "../images/image-about-dark.jpg";
import Image2 from "../images/image-about-light.jpg";
const About = () => {
  return (
    <section className="about">
      <img src={Image1}  alt="about-img" />
      <div className="about-content">
        <h2>about our furniture</h2>
        <p>
          Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohessive theme that best express your interest and what inspires you. Find the furniture pieces you need, from traditionnal to contemporary styles or anything in between. Product specialists are available to help you create your dream space.Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohessive theme that best express your interest and what inspires you. Find the furniture pieces you need, from traditionnal to contemporary styles or anything in between. Product specialists are available to help you create your dream space.Make each room unique, or pick a cohessive theme that best express your interest and what inspires you. Find the furniture pieces you need, from traditionnal to contemporary styles or anything in between. Product specialists are available to help you create your dream space
        </p>
      </div>
      <img src={Image2}  alt="about-img" />
    </section>
  );
};

export default About;
