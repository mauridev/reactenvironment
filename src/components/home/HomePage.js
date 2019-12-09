import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbtron">
    <h1>Administracion</h1>
    <p>React, Redux and React Router for ultra-responsive web apps.</p>
    <Link to="about" className="btn btn-primary btn-lg">
      Aprende más
    </Link>
  </div>
);

export default HomePage;
