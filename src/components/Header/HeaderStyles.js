import styled from 'styled-components';

/* Above the Fold White Section */
export const WhiteHalf1 = styled.header`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 50%;
  height: 500px;
  margin-bottom: 5px;
  justify-content: center;
  background-color: white;  
`;
  
export const Title = styled.h1`
  font-family: 'Chango', cursive
`; 

/* blue square is stationary */
export const BlueSquare = styled.div`
  position: absolute;
  margin-top: 135px;
  width: 300px;
  height: 300px; 
  background-color: var(--blue);
  justify-content: center;
  align-content: center;
`;
  
/* yellow square is faster */
export const YellowSquare = styled.div`
  position: absolute;
  margin-top: 135px;
  width: 300px;
  height: 300px; 
  background-color: var(--yellow);
  opacity: 0.75;
  justify-content: center;
  align-content: center;
  -webkit-animation: rescale 2s infinite;
  animation: rescale 2s infinite;
`;
  
/* pink square is slower */
export const PinkSquare = styled.div`
  position: absolute;
  margin-top: 135px;
  width: 300px;
  height: 300px; 
  background-color: var(--pink);
  opacity: 0.83;
  justify-content: center;
  align-content: center;
  -webkit-animation: rescale 1s infinite;
  animation: rescale 4s infinite;
`;
  
  /* I moved the animation for the squares */