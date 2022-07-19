import styled from 'styled-components';

/* About Me Section */
export const AboutMe = styled.section `
  margin: 60px 0 10px 0;
  position: absolute;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const BlackHalf2 = styled.section `
  position: absolute;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 30%;
  height: 500px;
  justify-content: center;
  background: black url("../assets/images/black-paint.png") repeat;
  z-index: -1;
`;

/* Moving Circle Section */
export const MovingCircles = styled.section `
  margin-top: 140px;
  left: 66px;
  position: absolute;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-left: 82px;
  align-items: center;
`;

export const PinkCircle = styled.div `
  margin-top: -20px;
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: var(--pink);
  justify-content: center;
  align-content: center;
  animation: moveUp 2s infinite;
  animation: moveDown 2s infinite;
`;

export const BlueCircle = styled.div `
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: var(--blue);
  justify-content: center;
  align-content: center;
  animation: moveLeft 2s infinite;
  animation: moveRight 2s infinite;
`;

export const YellowCircle = styled.div `
  margin-top: 145px;
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: var(--yellow);
  opacity: 0.75;
  justify-content: center;
  align-content: center;
  animation: moveRight 2s infinite;
  animation: moveLeft 2s infinite;
`;

/* I removed hidden, show, and animation styles from this spot*/

export const WhiteHalf2 = styled.section `
  display: flex;
  position: absolute;
  flex-direction: column;
  flex-wrap: wrap;
  right: 0;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 500px;
  background-color: white;
  z-index: -1;
`;

/* Picture of Amy */
export const AmyPic = styled.img `
  display: flex;
  position: absolute;
  margin-top: -270px;
  right: 120px;
  animation: moveDown 2s infinite;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: var(--blue);
  justify-content: center;
  align-content: center;
  -webkit-animation: pictureBop 1s infinite;
  animation: pictureBop 2s infinite;
  z-index: 1;
`;

/* I removed animation from this spot */

export const AboutMeText = styled.section `
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

/* About Me Image */
export const AboutMeHeader = styled.img `
  margin-top: -55px;
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 250px;
  justify-content: center;
  align-items: center;
`;

export const AboutMeText = styled.p `
  margin-top: 210px;
  font-family: 'Readex Pro', sans-serif;
  width: 200px;
  line-height: 1.2em;
`;

export const AboutMeDes = styled.p `
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 250px;
  justify-content: center;
  align-items: center;
  font-family: 'Readex Pro', sans-serif;
`;