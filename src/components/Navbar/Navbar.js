import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavLinks } from "./Navbar.styles";

const Navbar = () => {
   return (
      <Nav>
         <Link to="/" className="logo">
            <h2>AET</h2>
            <span>Akinloose Emmanuel Temidayo</span>
         </Link>

         <NavLinks>
            <Link to="/">
               <button>About</button>
            </Link>
            <Link to="/">
               <button>Contact</button>
            </Link>
         </NavLinks>
      </Nav>
   );
};

export default Navbar;
