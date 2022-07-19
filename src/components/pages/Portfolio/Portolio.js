import React from 'react';
import Project from '../../Project/Project';
import projects from '../../Project/projectList';
import './PortfolioStyles.css';

function Portfolio() {
    return ( 
        <section className = "work" >
          <h1 id = "work-header" > Work </h1>
          <Project projects = {projects}/>
        </section>
    )
}

export default Portfolio;