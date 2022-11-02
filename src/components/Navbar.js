import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <header className="nav">
      <div className="logo">
        <h2>Sample App 3</h2>
      </div>
      <nav>
        <ul className="nav-bar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/forms">Forms</Link>
          </li>
          <li>
            <Link to="/movies">Anime</Link>
          </li>
          <li>
            <Link to="/movies">Random</Link>
          </li>
        </ul> 
      </nav>
      <div className="others">
      <input type="text" name="name" className="nav-search" />
      <button  className="search">Search</button>
      </div>
      
      
     
    </header>
  );
}
