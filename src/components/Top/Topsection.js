import React from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "./Topsection.styles";

const Topsection = () => {
   return (
      <Wrapper>
         <h2>Hello i'm Emmanuel, a design and engineering enthusiast.</h2>
         <p>
            i speciallize in frontend development for web and mobile
            applications. find my reviews here on{" "}
            <span className="aet">
               <Link to="/review">AET</Link>
            </span>
            , find some of my codes on <span className="github">Github</span>{" "}
            and find out more about me on{" "}
            <span className="instagram">Instagram</span>
         </p>
      </Wrapper>
   );
};

export default Topsection;
