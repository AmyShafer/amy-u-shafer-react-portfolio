import React from 'react';

function Header(props) {
  return ( <
    header className >
    <
    section id = "white-half1" >
    <
    h1 id = "title" > Amy 's Portfolio</h1> <
    div id = "blue-square" > < /div> <
    div id = "yellow-square" > < /div> <
    div id = "pink-square" > < /div> <
    /section> <
    section id = "black-half1" >
    <
    nav >
    <
    ul >
    <
    li id = "about-me-link" > < a href = "#about-me" > About Me < /a></li >
    <
    li id = "work-link" > < a href = "#work" > Work < /a></li >
    <
    li id = "contact-me-link" > < a href = "#contact-me" > Contact Me < /a></li >
    <
    /ul> <
    /nav> <
    /section> <
    /header>
  )
}

export default Header;