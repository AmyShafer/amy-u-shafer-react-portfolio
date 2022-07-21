import React, {
  useState
} from 'react';
import Project from '../Project';

function Portfolio() {
  const [projects] = useState([{
      name: "CS Icons Quiz",
      description: "Take this quiz to learn about computer science icons. Select the correct answer before the timer runs out. See if you can make the scoreboard!",
      link: "https://amyshafer.github.io/CS-Icons-Quiz/",
      repo: "https://github.com/AmyShafer/CS-Icons-Quiz"
    },
    {
      name: "It's Raining Again!",
      description: "We're your Weather Girls and have we got news for you! You betta listen -- We have a new weather app to put all your weather worries to rest. We might not be able to help with your love life (this time) but until that miracle blesses our skies again, we have just the thing for all your climate quandaries.",
      link: "https://amyshafer.github.io/Its-Raining-Again-Or-Is-It/",
      repo: "https://github.com/AmyShafer/Its-Raining-Again-Or-Is-It"
    },
    {
      name: "Mad Archer's Cookbook",
      description: "Mad Archer's Cookbook helps a hungry public by allowing users to search for recipes by entering in ingredients they already have on hand.",
      link: "https://amyshafer.github.io/Mad-Archers-Cookbook/",
      repo: "https://github.com/AmyShafer/Mad-Archers-Cookbook"
    },
    {
      name: "Scheduler for the Wicked",
      description: "Grave digging? Reanimating of lifeless tissue? Coven meetings? Scrolls are so 7th century! Give Modern Paganism a chance with this brand new app for the morally corrupt and immortally upped.",
      link: "https://amyshafer.github.io/Scheduler-for-the-Wicked/",
      repo: "https://github.com/AmyShafer/Scheduler-for-the-Wicked"
    },
  ]);

  return ( <
    div >
    <
    div className = "flex-row" > {
      projects.map((project, idx) => ( <
        Project project = {
          project
        }
        key = {
          "project" + idx
        }
        />
      ))
    } <
    /div> <
    /div>
  );
};

export default Portfolio;