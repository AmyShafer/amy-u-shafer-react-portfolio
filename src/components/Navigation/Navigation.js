import React, {
  useEffect
} from 'react';

function Navigation(props) {
  const {
    pages = [];
    setCurrentPage,
    currentPage,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage.name);
  }, [currentPage]);

  return ( <
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
    /ul> < /
    nav > <
    /section>
  );
}

export default Navigation;