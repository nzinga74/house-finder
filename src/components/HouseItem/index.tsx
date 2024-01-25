import "./style/index.css";
import House from "../../assets/house.jpg";
const HouseItem = () => {
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
          <button className="book-button">Reservar</button>
          <p>$350.99</p>
        </div>
      </div>
    </div>
  );
};
export default HouseItem;
