import styled from 'styled-components';

/* Work Section Image */
export const WorkHeader = styled.img `
  margin-top: -350px;
  position: absolute;
  display: flex;
  flex-direction: row;
  width: 220px;
  z-index: 1;
`;

/* Work Section White Section */
export const WhiteHalf3 = styled.section `
  position: absolute;
  display: flex;
  flex-direction: row;
  lex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 35%;
  height: 500px;
  background-color: white;
  z-index: 1;
`;

export const WorkText = styled.section `
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const WorkText = styled.p `
  margin-top: -240 px;
  font-family: 'Readex Pro', sans-serif;
  width: 200 px;
`;

/* Removed Shapes */

/* The font gets bigger when the user hovers over the link */
export const WorkSquare = styled.a`
  font - size: 2.5 em;
  font - family: 'Homemade Apple', cursive;
  color: black;
`;

export const WorkTriangle = styled.a`
  font - size: 2.5 em;
  font - family: 'Homemade Apple', cursive;
  color: black;
`;

export const WorkCircle = styled.a`
  font - size: 2.5 em;
  font - family: 'Homemade Apple', cursive;
  color: black;
`;

export const BlackHalf3 = styled.section `
  display: flex;
  position: absolute;
  flex-direction: row;
  flex-wrap: wrap;
  right: 0;
  width: 65%;
  height: 500px;
  justify-content: center;
  background: black url("../assets/images/black-paint.png") repeat;
  z-index: -1;
`;

/* yellow triangle is stationary */
export const Yellowriangle = styled.div `
  display: flex;
  position: absolute;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
  width: 0;
  height: 0;
  border-left: 150px solid transparent;
  border-right: 150px solid transparent;
  border-bottom: 300px solid var(--yellow);
`;

/* blue triangle spins */
export const BlueTriangle = styled.div `
  display: flex;
  position: absolute;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
  width: 0;
  height: 0;
  opacity: .72;
  border-left: 150px solid transparent;
  border-right: 150px solid transparent;
  border-bottom: 300px solid var(--blue);
  -webkit-animation: rescale 1s infinite;
  animation: rescale 5s infinite;
`;

/* pink triangle spins */
export const PinkTriangle = styled.div `
  display: flex;
  position: absolute;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
  width: 0;
  height: 0;
  opacity: .82;
  border-left: 150px solid transparent;
  border-right: 150px solid transparent;
  border-bottom: 300px solid var(--pink);
  -webkit-animation: rescale 1s infinite;
  animation: rescale 3s infinite;
`;

/* I removed animation from this spot */

/* After the user selects a project to view, the triangles change to a gif of the project */
export const ProjectGif = styled.img `
  display: flex;
  margin: 7 % ;
  justify - content: center;
  align - items: center;
  width: 85 % ;
  height: auto;
  border - radius: 3 em;
  z - index: 1;
`;