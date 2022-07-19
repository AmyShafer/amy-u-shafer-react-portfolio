import React from 'react';
import {
  BlackHalf1,
  AboutMeLink,
  WorkLink,
  ContactMeLink,
  nav,
  NavItem,
  NavLink
} from './NavigationStyles';

function Navigation(props) {
  const hyperLinks = ['About', 'Work', 'Contact'];
  return ( < nav > {
      hyperLinks.map(hyperLink => ( <
        NavItem key = {
          hyperLink
        } >
        <
        NavLink href = {
          '#' + hyperLink.toLowerCase()
        }
        onClick = {
          () => props.handlePageChange(hyperLink)
        } > {
          hyperLink
        } <
        /NavLink> < /
        NavItem >
      ))
    } <
    /nav>
  );
}

export default Navigation;