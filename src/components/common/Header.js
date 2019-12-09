import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeSyle = { color: "#F15B2A" };

  return (
    <nav>
      <NavLink to="/" activeStyle={activeSyle} exact>
        Home
      </NavLink>{" "}
      {" | "}
      <NavLink to="/courses" activeStyle={activeSyle}>
        Cursos
      </NavLink>
      {" | "}
      <NavLink to="/about" activeStyle={activeSyle}>
        About
      </NavLink>
    </nav>
  );
};

export default Header;
