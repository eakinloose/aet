import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Wrapper } from "./Projects.styles";
import edusko from "../images/edusko.png";
import oneburner from "../images/one-burner.png";
import prospa from "../images/prospa.png";
import fused from "../images/fused.png";

const Projects = () => {
   useEffect(() => {
      Aos.init({ duration: 1000 });
   }, []);
   return (
      <Wrapper>
         <h3>So let's talk about my Projects.</h3>
         <div className="projectholder">
            <div className="Eduskowrapper">
               <div className="flex">
                  <img src={edusko} alt="edusko" />
                  <h5>Duration: One Month</h5>
                  <h5>Next.js and typeScript</h5>

                  <p>
                     Edusko is an education marketing company leveraging tech
                     and data to make life easier for all in the African
                     education community.
                     <br />
                     <p>NB: In progress</p>
                  </p>
                  <button>
                     <a href="https://edusko.com">See Edusko</a>
                  </button>
               </div>
            </div>
            <div data-aos="fade-up" className="oneburnerwrapper">
               <div className="flex">
                  <img src={oneburner} alt="oneburner" />
                  <h5>Duration: One Month</h5>
                  <p>
                     Fugiat nisi duis tempor fugiat sunt cupidatat adipisicing
                     minim eu enim. Esse laboris aliqua ipsum ullamco qui mollit
                     esse consectetur in et consectetur ullamco. Velit aliquip
                     sunt eiusmod cillum tempor id occaecat velit proident
                     deserunt exercitation eiusmod do dolor. Aute proident ad
                     tempor tempor esse officia.
                     <p>NB: Best view on width: 1040px</p>
                  </p>
                  <button>
                     <a href="https://nuelzone-burner.netlify.app">
                        See one-burner
                     </a>
                  </button>
               </div>
            </div>
            <div data-aos="fade-up" className="storewrapper">
               <div className="flex">
                  <h3>Nuel-Store</h3>
                  <h5>Duration: One Month</h5>
                  <p>
                     Fugiat nisi duis tempor fugiat sunt cupidatat adipisicing
                     minim eu enim. Esse laboris aliqua ipsum ullamco qui mollit
                     esse consectetur in et consectetur ullamco. Velit aliquip
                     sunt eiusmod cillum tempor id occaecat velit proident
                     deserunt exercitation eiusmod do dolor. Aute proident ad
                     tempor tempor esse officia.
                     <p>NB: Best view on width: 1040px</p>
                  </p>
                  <button>
                     <a href="https://nuelstore.netlify.app">See Nuel-Store</a>
                  </button>
               </div>
            </div>
            <div data-aos="fade-up" className="prosperwrapper">
               <div className="flex">
                  <img src={prospa} alt="prospa" />
                  <h5>Duration: One Month</h5>
                  <p>
                     Fugiat nisi duis tempor fugiat sunt cupidatat adipisicing
                     minim eu enim. Esse laboris aliqua ipsum ullamco qui mollit
                     esse consectetur in et consectetur ullamco. Velit aliquip
                     sunt eiusmod cillum tempor id occaecat velit proident
                     deserunt exercitation eiusmod do dolor. Aute proident ad
                     tempor tempor esse officia.
                     <p>NB: Best view on width: 1040px</p>
                  </p>
                  <button>
                     <a href="https://nuelzprospa.netlify.app">See Prospa</a>
                  </button>
               </div>
            </div>
            <div data-aos="fade-up" className="fusedwrapper">
               <div className="flex">
                  <img src={fused} alt="fused" />
                  <h5>Duration: Six Month</h5>
                  <p>
                     FusedAfrika is a networking platform for tertiary
                     institution students in Africa..
                  </p>
                  <p></p>
                  <button>
                     <a href="https://nuelzfused.netlify.app">See Fused</a>
                  </button>
               </div>
            </div>
         </div>

         <h5>
            i have more functional projects but i want to add a little something
            something to them... WATCH THE SPACE.
         </h5>
      </Wrapper>
   );
};

export default Projects;
