import "./style/index.css";
import House from "../../assets/house.jpg";
import { useNavigate } from "react-router-dom";
import { IProperty } from "../../models/property/IProperty";
import { baseURL } from "../../services/api";
interface HouseItemProps {
  property: IProperty;
}
//`${baseURL}/static/${property.image}`
const HouseItem = ({ property }: HouseItemProps) => {
  const navigate = useNavigate();
  return (
    <div className="house-item">
      <img src={`${baseURL}/static/${property.image}`} />
      <div className="house-iem-content">
        <h4>{property.name}</h4>
        <p>Moira Rede, London</p>
        <ul>
          <li>{property.numberOfBedrooms} Quartos</li>
          <li>{property.numberOfBedrooms} Banheiros</li>
          <li>{property.numberOfBedrooms} Cozinhas</li>
        </ul>
        <div className="house-item-footer">
          <button
            className="book-button"
            onClick={() => navigate(`/detail/${property.id}`)}
          >
            Ver Mais
          </button>
          <p>${property.price}</p>
        </div>
      </div>
    </div>
  );
};
export default HouseItem;
