import React from "react";
import { Wrapper } from "./Main.styles";

const Main = () => {
   return (
      <Wrapper>
         <h4>What Languages do i write?</h4>
         <p>
            Before listing the languages and framework i can use let me start by
            letting you know learning to programme in <span className="c">c#</span> was one of
            my set objective for next year 2022.
         </p>
         <h4>Okay let's start</h4>
         <ul>
            <li>
               <p>HTML5</p>{" "}
               <span>&#x2B50;&#x2B50;&#x2B50;&#x2B50;&#x2B50;</span>
            </li>
            <li>
               <p>CSS</p> <span>&#x2B50;&#x2B50;&#x2B50;&#x2B50;&#x2B50;</span>
            </li>
            <li>
               <p>javaScript</p>{" "}
               <span>&#x2B50;&#x2B50;&#x2B50;&#x2B50;&#x2B50;</span>
            </li>
            <li>
               <p>react.js</p>
               <span>&#x2B50;&#x2B50;&#x2B50;&#x2B50; &#10025;</span>
            </li>
            <li>
               <p>Next.js</p>{" "}
               <span>&#x2B50;&#x2B50;&#x2B50;&#x2B50; &#10025;</span>
            </li>
            <li>
               <p>typeScript</p>
               <span>&#x2B50;&#x2B50;&#x2B50; &#10025; &nbsp; &#10025;</span>
            </li>
         </ul>
      </Wrapper>
   );
};

export default Main;
