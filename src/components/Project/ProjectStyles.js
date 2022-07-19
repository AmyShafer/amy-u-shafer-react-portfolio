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

/* Dropdown menu from Bootstrap */
.dropdown-toggle {
  margin - bottom: 150 px;
  padding: .5 em;
  width: 270 px;
  font - family: 'Chango', cursive;
  background - color: var (--pink);
  color: white;
  border - radius: 5 em;
}

  .dropdown - toggle: hover {
    font - family: 'Chango', cursive;
    background - color: var (--blue);
    color: white;
  }

  .dropdown - item {
    font - family: 'Readex Pro', sans - serif;
    color: black;
    line - height: 1.2 em;
    text - decoration: none;
  }

  .dropdown - menu {
    position: absolute;
    border: solid 2 px
    var (--blue);
    margin: 5 px;
    padding: 5 px;
    flex - direction: column;
  }

  .dropdown - item: hover {
    font - family: 'Readex Pro', sans - serif;
    color: var (--pink);
    font - weight: 900;
    text - decoration: none;
  }

a {
  font - family: 'Chango', cursive;
}

#
work - square {
  position: absolute;
  margin - top: -20 px;
  left: -15 px;
  width: 105 px;
  height: 105 px;
  background - color: var (--pink);
}

# work - triangle {
  position: absolute;
  margin - top: 30 px;
  right: 50 px;
  position: absolute;
  width: 0;
  height: 0;
  border - left: 50 px solid transparent;
  border - right: 50 px solid transparent;
  border - bottom: 100 px solid
  var (--blue);
}

# work - circle {
  position: absolute;
  margin - top: -30 px;
  right: -10 px;
  width: 80 px;
  height: 80 px;
  border - radius: 50 % ;
  background - color: var (--yellow);
}

# work - square a, #work - circle a, #work - triangle a {
  font - size: 1.3 em;
  font - family: 'Homemade Apple', cursive;
  color: black;
  text - decoration: none;
}

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