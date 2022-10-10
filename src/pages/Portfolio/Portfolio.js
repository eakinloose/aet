import { PortfolioWrapper } from "./PortfolioStyles";
import project1 from "../../images/projects/project-1.jpg";
import project2 from "../../images/projects/project-2.jpg";
import project3 from "../../images/projects/project-3.jpg";
import project4 from "../../images/projects/project-4.jpg";
import project5 from "../../images/projects/project-5.jpg";
import project6 from "../../images/projects/project-6.jpg";
import project7 from "../../images/projects/project-7.jpg";
import project8 from "../../images/projects/project-8.jpg";
import { Link } from "react-router-dom";

const workData = [
   {
      img: project1,
      name: "Fused Afrika",
      client: "Fused Afrika",
      duration: "4 Months",
      technologies: ["NextJs and  Typescript"],
      link: "https://www.fusedafrika.com",
   },
   {
      img: project3,
      name: "Denukan",
      client: "Denukan Network Limited",
      duration: "4 Days",
      technologies: ["React"],
      link: "https://www.denukan.com",
   },
   {
      img: project2,
      name: "Nuelz Store",
      client: "Nuelz Store",
      duration: "1 Month",
      technologies: ["React, Reduxtoolkit and Firebase"],
      link: "https://nuelz-store.netlify.app/",
   },
   {
      img: project4,
      name: "Oneburner",
      client: "Personal Try out",
      duration: "1 Week",
      technologies: ["HTML, CSS and Javascript"],
      link: "https://nuelzone-burner.netlify.app/",
   },
   {
      img: project5,
      name: "MVC Todo",
      client: "personal try out",
      duration: "2 Weeks",
      technologies: ["React"],
      link: "https://nuelztodo.netlify.app/",
   },
   {
      img: project6,
      name: "PROSPA",
      client: "PROSPA",
      duration: "2 Months",
      technologies: ["NextJs"],
      link: "https://nuelzprospa.netlify.app/",
   },
   {
      img: project7,
      name: "Edusko",
      client: "Edusko",
      duration: "3 Months",
      technologies: ["Nextjs and typescript"],
      link: "https://www.edusko.com",
   },
   {
      img: project8,
      name: "Denukan Core Banking App",
      client: "Denukan Network Limited",
      duration: "4 Days",
      technologies: ["MERN STACK"],
      link: "https://nuelz-cba.netlify.app/",
   },
];

const Work = () => {
   //  const [active, setActive] = useState(null);
   return (
      <PortfolioWrapper>
         {/* Main Heading Starts */}
         <div className="head">
            <h1>
               my <span>portfolio</span>
            </h1>
            <span>
               A few recent design and coding projects. Want to see more? Click
               on the Email on my <Link to="/about">about page</Link>
            </span>
         </div>

         <ul className="row" id="portfolio-items">
            {workData.map((work, i) => (
               <li className="col-12 col-md-6 col-lg-4" key={i}>
                  <img src={work.img} alt="Project" className="img-fluid" />
                  <div className="details">
                     <p>Project Title : {work.name}</p>
                     <p>Client : {work.client}</p>
                     <p>Project Duration : {work.duration}</p>
                     <p>Tecnology : {work.technologies}</p>
                     <div>
                        <a href={work.link}>Preview website </a>
                     </div>
                  </div>
               </li>
            ))}
         </ul>
      </PortfolioWrapper>
   );
};
export default Work;
