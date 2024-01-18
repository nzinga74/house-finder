import React from "react";
import "./style/index.css";
import Logo from "../../assets/b.png";

export const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="navbar">
          <img src={Logo} className="logo" />
          <ul className="navbar-menu">
            <li>Home</li>
            <li>Progresso</li>
            <li>Casas</li>
            <li>
              <button className="login-button">Sign Up</button>
            </li>
          </ul>
        </div>
        <div className="hero">
          <div className="hero-left">
            <h2>Explore a imóveis e garanta a sua casa ideal</h2>
          </div>
          <div className="hero-right" />
        </div>
      </div>
    </div>
  );
};
