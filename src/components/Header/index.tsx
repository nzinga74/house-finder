import React from "react";
import Logo from "../../assets/b.png";
import "./style/index.css";
import { useNavigate } from "react-router-dom";
export const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="container">
        <div className="navbar">
          <img src={Logo} className="logo" />
          <ul className="navbar-menu">
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/reserve")}>Reservas</li>
            <li onClick={() => navigate("/contract")}>Contratos</li>
            <li>
              <button
                className="login-button"
                onClick={() => navigate("/login")}
              >
                Sign In
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
