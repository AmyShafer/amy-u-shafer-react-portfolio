import React from 'react';
import profilePic from "../../assets/images/aShafer.png";
import aboutMeHeader from "../../assets/header/aboutMe.png";
import blackPaintImg from "../../assets/images/black-paint.png";

function About() {
  return ( <section id="about-me" className="about-me">
  <section id="moving-circles">
    <div id="blue-circle"></div>
    <div id="yellow-circle"></div>
    <div id="pink-circle"></div>
  </section>
  <section id="black-half2" style={{background: `black url (${blackPaintImg}) center no-repeat`}}></section>
  <section id="white-half2">
    <img
      id="amy-pic"
      src={profilePic}
      alt="Amy Shafer"
    />
    <section id="about-me-text">
      <img
        id="about-me-header"
        src={aboutMeHeader}
        alt="about-me-header"
      />
      <p>
        My name is Amy Shafer and I am learning about web development. It's
        going pretty well so far but the circles are supposed to be doing
        something completely different.
      </p>
    </section>
  </section>
</section>
  );
}

export default About;