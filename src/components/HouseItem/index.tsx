import "./style/index.css";
import House from "../../assets/house.jpg";
import { useNavigate } from "react-router-dom";

const HouseItem = () => {
  const navigate = useNavigate();
  return (
    <div className="house-item">
      <img src={House} />
      <div className="house-iem-content">
        <h4>Kyiv Residence</h4>
        <p>Moira Rede, London</p>
        <ul>
          <li>2 Quartos</li>
          <li>2 Banheiros</li>
          <li>1 Cozinhas</li>
        </ul>
        <div className="house-item-footer">
          <button className="book-button" onClick={() => navigate("/detail")}>
            Ver Mais
          </button>
          <p>$350.99</p>
        </div>
      </div>
    </div>
  );
};
export default HouseItem;
