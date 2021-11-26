import React from "react";
import { Wrapper } from "./Projects.styles";
import edusko from "../images/edusko.png";
import oneburner from "../images/one-burner.png";
import prospa from "../images/prospa.png";

const Projects = () => {
   return (
      <Wrapper>
         <h4>So let's talk about my Projects.</h4>
         <div className="Eduskowrapper">
            <div>
               <img src={edusko} alt="edusko" />
               <h5>Duration: One Month</h5>
               <p>
                  Fugiat nisi duis tempor fugiat sunt cupidatat adipisicing
                  minim eu enim. Esse laboris aliqua ipsum ullamco qui mollit
                  esse consectetur in et consectetur ullamco. Velit aliquip sunt
                  eiusmod cillum tempor id occaecat velit proident deserunt
                  exercitation eiusmod do dolor. Aute proident ad tempor tempor
                  esse officia.
                  <p>NB: In progress</p>
               </p>
               <button>See Edusko</button>
            </div>
         </div>
         <div className="oneburnerwrapper">
            <div>
               <img src={oneburner} alt="edusko" />
               <h5>Duration: One Month</h5>
               <p>
                  Fugiat nisi duis tempor fugiat sunt cupidatat adipisicing
                  minim eu enim. Esse laboris aliqua ipsum ullamco qui mollit
                  esse consectetur in et consectetur ullamco. Velit aliquip sunt
                  eiusmod cillum tempor id occaecat velit proident deserunt
                  exercitation eiusmod do dolor. Aute proident ad tempor tempor
                  esse officia.
                  <p>NB: Best view on width: 1040px</p>
               </p>
               <button><a href="https://nuelzone-burner.netlify.app">See one-burner</a></button>
            </div>
         </div>
         <div className="prosperwrapper">
            <div>
               <img src={prospa} alt="prospa" />
               <h5>Duration: One Month</h5>
               <p>
                  Fugiat nisi duis tempor fugiat sunt cupidatat adipisicing
                  minim eu enim. Esse laboris aliqua ipsum ullamco qui mollit
                  esse consectetur in et consectetur ullamco. Velit aliquip sunt
                  eiusmod cillum tempor id occaecat velit proident deserunt
                  exercitation eiusmod do dolor. Aute proident ad tempor tempor
                  esse officia.
                  <p>NB: Best view on width: 1040px</p>
               </p>
               <button><a href="https://nuelzprospa.netlify.app">See Prospa</a></button>
            </div>
         </div>
         <h5>i have more functional projects but i want to add a little something something to them... WATCH THE SPACE.</h5>
      </Wrapper>
   );
};

export default Projects;
