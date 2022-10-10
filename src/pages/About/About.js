import { AboutWrapper } from "./AboutStyles";
import { BsDownload } from "react-icons/bs";
import { GiSpiralArrow } from "react-icons/gi";
import img from "../../images/img.jpg";
import cv from "../../images/cv.pdf";

const About = () => {
   return (
      <AboutWrapper>
         <div className="head">
            <h1>
               about <span>me</span>
            </h1>
            <span>
               I design and code beautiful web pages and graphics, and I love
               what I do.
            </span>
         </div>

         <div className="infos">
            <div className="personal-info">
               <div className="image-container">
                  <img src={img} alt="" />
               </div>
               <div className="ul-cont">
                  <div className="ul">
                     <ul>
                        <li>
                           <h4>Akinloose Emmanuel Temidayo</h4>
                        </li>
                        <li>
                           <h4>29 September 1993</h4>
                        </li>
                        <li>
                           <h4>Nigerian</h4>
                        </li>
                        <li>
                           <h4>3+ years experience</h4>
                        </li>
                        <li>
                           <h4>
                              <a href="mailto:emmanuelakinloose20@gmail.com">
                                 Emmanuelakinloose20@gmail.com
                              </a>
                           </h4>
                        </li>
                     </ul>
                     <ul>
                        <li>
                           <h4>Available for freelancing</h4>
                        </li>
                        <li>
                           <h4>English</h4>
                        </li>
                        <li>
                           <h4>
                              <a href="tel:+2348142939448">+234 8142 939 448</a>
                           </h4>
                        </li>

                        <li>
                           <h4>Lagos, Nigeria</h4>
                        </li>
                     </ul>
                  </div>
                  <a
                     href={cv}
                     download="Akinloose Emmanuel Resume"
                     className="btn-resume"
                  >
                     <button>
                        <div className="btn">
                           <span>
                              <BsDownload />
                              &nbsp;&nbsp;
                              <span className="trans">download cv</span>
                           </span>
                        </div>
                     </button>
                  </a>
               </div>
            </div>
         </div>

         {/* Skills Starts */}
         <div>
            {/* Skill Bar Starts */}
            <div className="col-12">
               <h2 className="font-weight-600 uppercase title-section skills-title">
                  Skills
               </h2>
            </div>
            <div className="skills">
               {/* Skill Bar Starts */}
               <div className="col-md-4">
                  <span className="skill-text">html</span>
                  <div className="chart-bar">
                     <span
                        className="item-progress"
                        data-percent={95}
                        style={{ width: "95%" }}
                     />
                     <span
                        className="percent"
                        style={{ right: "calc(5% - 21px)" }}
                     >
                        95%
                        <h2>
                           <GiSpiralArrow />
                        </h2>
                     </span>
                  </div>
               </div>
               {/* Skill Bar Ends */}
               {/* Skill Bar Starts */}
               <div className="col-md-4">
                  <span className="skill-text">javascript</span>
                  <div className="chart-bar">
                     <span
                        className="item-progress"
                        data-percent={90}
                        style={{ width: "90%" }}
                     />
                     <span
                        className="percent"
                        style={{ right: "calc(10% - 21px)" }}
                     >
                        90%
                        <h2>
                           <GiSpiralArrow />
                        </h2>
                     </span>
                  </div>
               </div>
               {/* Skill Bar Ends */}
               {/* Skill Bar Starts */}
               <div className="col-md-4">
                  <span className="skill-text">css</span>
                  <div className="chart-bar">
                     <span
                        className="item-progress"
                        data-percent={95}
                        style={{ width: "95%" }}
                     />
                     <span
                        className="percent"
                        style={{ right: "calc(5% - 21px)" }}
                     >
                        95%
                        <h2>
                           <GiSpiralArrow />
                        </h2>
                     </span>
                  </div>
               </div>
               {/* Skill Bar Ends */}
               {/* Skill Bar Starts */}
               <div className="col-md-4">
                  <span className="skill-text">node js & express</span>
                  <div className="chart-bar">
                     <span
                        className="item-progress"
                        data-percent={70}
                        style={{ width: "70%" }}
                     />
                     <span
                        className="percent"
                        style={{ right: "calc(30% - 21px)" }}
                     >
                        70%
                        <h2>
                           <GiSpiralArrow />
                        </h2>
                     </span>
                  </div>
               </div>
               {/* Skill Bar Ends */}
               {/* Skill Bar Starts */}
               <div className="col-md-4">
                  <span className="skill-text">react js</span>
                  <div className="chart-bar">
                     <span
                        className="item-progress"
                        data-percent={90}
                        style={{ width: "90%" }}
                     />
                     <span
                        className="percent"
                        style={{ right: "calc(10% - 21px)" }}
                     >
                        90%
                        <h2>
                           <GiSpiralArrow />
                        </h2>
                     </span>
                  </div>
               </div>
               {/* Skill Bar Ends */}
               {/* Skill Bar Starts */}
               <div className="col-md-4">
                  <span className="skill-text">next js</span>
                  <div className="chart-bar">
                     <span
                        className="item-progress"
                        data-percent={85}
                        style={{ width: "85%" }}
                     />
                     <span
                        className="percent"
                        style={{ right: "calc(15% - 21px)" }}
                     >
                        85%
                        <h2>
                           <GiSpiralArrow />
                        </h2>
                     </span>
                  </div>
               </div>
               {/* Skill Bar Ends */}
               {/* Skill Bar Starts */}
               <div className="col-md-4">
                  <span className="skill-text">dart & flutter</span>
                  <div className="chart-bar">
                     <span
                        className="item-progress"
                        data-percent={60}
                        style={{ width: "60%" }}
                     />
                     <span
                        className="percent"
                        style={{ right: "calc(40% - 21px)" }}
                     >
                        60%
                        <h2>
                           <GiSpiralArrow />
                        </h2>
                     </span>
                  </div>
               </div>
               {/* Skill Bar Ends */}
               {/* Skill Bar Starts */}
               <div className="col-md-4">
                  <span className="skill-text">illustrator</span>
                  <div className="chart-bar">
                     <span
                        className="item-progress"
                        data-percent={60}
                        style={{ width: "60%" }}
                     />
                     <span
                        className="percent"
                        style={{ right: "calc(40% - 21px)" }}
                     >
                        60%
                        <h2>
                           <GiSpiralArrow />
                        </h2>
                     </span>
                  </div>
               </div>
               {/* Skill Bar Ends */}
               {/* Skill Bar Starts */}
               <div className="col-md-4">
                  <span className="skill-text">photoshop</span>
                  <div className="chart-bar">
                     <span
                        className="item-progress"
                        data-percent={80}
                        style={{ width: "80%" }}
                     />
                     <span
                        className="percent"
                        style={{ right: "calc(20% - 21px)" }}
                     >
                        80%
                        <h2>
                           <GiSpiralArrow />
                        </h2>
                     </span>
                  </div>
               </div>
               {/* Skill Bar Ends */}
            </div>
         </div>
         {/* Skills Starts */}
      </AboutWrapper>
   );
};
export default About;
