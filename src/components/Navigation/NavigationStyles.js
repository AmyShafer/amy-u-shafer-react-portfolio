import styled from 'style-components';

export const BlackHalf1 = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 50%;
  height: 500px;
  justify-content: center;
  background: black url("../assets/images/navBar.png") center no-repeat;
`;

export const AboutMeLink = styled.a`
  padding: 2em 0 6em 0;
`;

export const WorkLink = styled.a`
  padding: 1em 0 3em 0;
`;

export const ContactMeLink = styled.a`
  padding: 3em 0 1em 0;
`;

/* Navigation Bar */
export const nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const NavLink = styled.h1`
  font-family: 'Homemade Apple', cursive;
  font-size: 2.5em;
`;

export const NavItem = styled.li`
  list-style: none;
`;

 /* Navigation Bar */
export const NavBar = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: 'Homemade Apple', cursive;
  color: black;
  font-size: 3em;
  text-decoration: none;
`;
