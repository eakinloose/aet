import React from "react";
import { Wrapper, Container, Title, Ul } from "./StyledAnimation";
import { fakeData } from "../../fakeData/fakeData";

const Animation = () => {
   return (
      <Wrapper>
         <Container>
            <Title>My Projects</Title>
            <Ul>
               {fakeData.map((elem, i) => (
                  <li key={i}>
                     <span>
                        <a href={elem.link}>
                           <div>
                              <span>{elem.name}</span>
                              <p>{elem.desc}</p>
                              <p className="small">
                                 <a href={elem.repo}>
                                    <em>{elem.repo}</em>
                                 </a>
                              </p>
                              <div className="stack">
                                 <h4>{elem.framework}</h4>
                                 <h4>{elem.framework2}</h4>
                                 <h4>{elem.framework4}</h4>
                                 <h4>{elem.framework3}</h4>
                              </div>
                           </div>
                        </a>
                     </span>
                     <div className="img-cont">
                        <img src={elem.img} alt={elem.name} />
                     </div>
                  </li>
               ))}
            </Ul>
         </Container>
      </Wrapper>
   );
};

export default Animation;
