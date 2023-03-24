import React from "react";
import { Router, Route, Routes, Link } from "react-router-dom";
import Frontend from "./frontend3.jpg";

function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <div className="logo-container">
        <img src={Frontend} alt="Frontend logo" className="logo" />
      </div>
    </header>
  );
}

export default Header;
