import React from 'react';

function About() {
    return ( 
        <section id="about-me" class="about-me">
        <section id="moving-circles">
          <div id="blue-circle"></div>
          <div id="yellow-circle"></div>
          <div id="pink-circle"></div>
        </section>
        <section id="black-half2"></section>
        <section id="white-half2">
          <img
            id="amy-pic"
            src="./assets/images/aShaferPort.png"
            alt="Picture of Amy Shafer"
          />
          <section id="about-me-text">
            <img
              id="about-me-header"
              src="./assets/images/aboutMe.png"
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
    )
}

export default About;