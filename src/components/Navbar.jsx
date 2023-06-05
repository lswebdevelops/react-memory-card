import React from "react";
import "../styles/Navbar.css";

const Navbar = ({ score, higherScore }) => {
  return (
    <div className="navbar-container">
      <h1>Memory Card</h1>
      <div className="score-container">
        <p>
          Score: <span className="span-score">{score}</span>{" "}
        </p>
        <p>
          Higher Score: <span className="span-higher-score">{higherScore}</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Navbar;
