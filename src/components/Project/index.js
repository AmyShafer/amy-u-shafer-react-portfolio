import React from "react";
import {
  removeHyphensAndCapitalize
} from '../../utils/helpers';
import blackPaintImg from "../../assets/images/black-paint.png";
import workHeaderImg from "../../assets/header/work.png";


function Project({
  project
}) {
  const {
    name,
    repo,
    link,
    description
  } = project;

  return ( <section id="work" class="work">
  <section id="white-half3">
    <section id="work-text">
      <img
        id="work-header"
        src={workHeaderImg}
        alt="work-header"
      />
      <p>Here is my work so far:</p>

      <div class="dropdown mt-1">
        <button
          class="btn btn-warning dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-toggle="dropdown"
          aria-expanded="false"
        >
          Featured Projects
        </button>

        <ul
          class="dropdown-menu hidden"
          aria-labelledby="dropdownMenuButton1"
        >
          <li>
            <a class="dropdown-item" data-set="0" href="#">
              CS Icons Quiz
            </a>
          </li>
          <li>
            <a class="dropdown-item" data-set="1" href="#">
              Weather Girls App
            </a>
          </li>
          <li>
            <a class="dropdown-item" data-set="2" href="#">
              Mad Archer's Cookbook
            </a>
          </li>
          <li>
            <a class="dropdown-item" data-set="3" href="#"> Scheduler </a>
          </li>
        </ul>
      </div>

      <div class="container">
        <div id="work-square">
    
          <a href="#" target="_blank" data-set="4"></a>
        </div>


        <div id="work-circle">
          <a href="#" target="_blank" data-set="5"></a>
        </div>

        <div id="work-triangle">
          <a href="#" target="_blank" data-set="6"></a>
        </div>
      </div>
    </section>
  </section>
  <section id="black-half3" style={{background: `black url (${blackPaintImg}) center no-repeat`}}>
    <div id="yellow-triangle" class="show"></div>
    <div id="blue-triangle" class="show"></div>
    <div id="pink-triangle" class="show"></div>
    <div id="no-triangles" class="hidden">
      <img id="project-gif" src="" alt="" />
    </div>
  </section>
</section>)
};

export default Project;