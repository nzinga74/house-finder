import React from "react";
import Logo from "../../assets/b.png";
import "./style/index.css";
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
      </div>
    </div>
  );
};
