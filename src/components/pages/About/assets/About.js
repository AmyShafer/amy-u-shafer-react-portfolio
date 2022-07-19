import React from 'react';
import { MovingCircle, BlueCircle, YellowCircle, PinkCircle, BlackHalf2, WhiteHalf2, AmyPic, AboutMeText };
import me from './assets/images/aShaferPort.png';

function About() {
    return (
        <section id="about-me" class="about-me">
          <section id="moving-circles">
            <div id="BlueCircle"></div>
            <div id="YellowCircle"></div>
            <div id="PinkCircle"></div>
          </section>
          <section id="BlackHalf2"></section>
          <section id="WhiteHalf2">
            <img
              id="AmyPic"
              src="./assets/images/aShaferPort.png"
              alt="Picture of Amy Shafer"
            />
            <section id="AboutMeText">
              <img
                id="AboutMeHeader"
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


