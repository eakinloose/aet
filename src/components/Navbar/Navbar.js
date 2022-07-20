import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavLinks } from "./Navbar.styles";

const Navbar = () => {
   return (
      <Nav>
         <div className="nav">
            <Link to="/" className="logo">
               <h2>AET</h2>
            </Link>
            <NavLinks>
               <Link to="/review">MY PROJECTS</Link>
            </NavLinks>
         </div>
      </Nav>
   );
};

export default Navbar;
