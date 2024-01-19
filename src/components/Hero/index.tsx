import React from "react";
import "./style/index.css";

const Hero = () => {
  return (
    <>
      <div className="main-hero">
        <div className="container">
          <div className="hero">
            <div className="hero-left">
              <h2>Explore a imóveis e garanta a sua casa ideal</h2>
              <p className="description">
                "Porque cada lar conta uma história, ajudamos a escrever a sua.
                Aqui encontras a casa dos teus sonhos menor preço"
              </p>
            </div>
            <div className="hero-right">
              <div className="image-hero" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="search-container">
          <div className="search-form-input">
            <label>Localização</label>
            <select>
              <option>Luanda</option>
              <option>Benguela</option>
              <option>Malanje</option>
            </select>
          </div>

          <div className="search-form-input">
            <label>Tipo da Casa</label>
            <select>
              <option>Normal</option>
              <option>Luxuoso</option>
              <option>Moderna</option>
            </select>
          </div>

          <div className="search-form-input">
            <label>Preço</label>
            <select>
              <option>100000kz - 200000kz</option>
              <option>200000kz - 300000kz</option>
              <option>400000kz - 500000kz</option>
            </select>
          </div>
          <div className="search-form-input">
            <button className="search-button">Pesquisar</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
