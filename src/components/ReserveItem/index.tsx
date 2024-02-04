import { FaLocationDot, FaCalendar, FaCalendarCheck } from "react-icons/fa6";
import "./style/index.css";
const ReserveItem = () => {
  return (
    <div className="reserve-item">
      <div>
        <h4>CASA MODERNA XPTO 12</h4>

        <div className="house-news-icon">
          <FaCalendar />
          <p>Data Sugerida: 12/10/2023</p>
        </div>
        <div className="house-news-icon">
          <FaCalendarCheck />
          <p>Data Marcada: 12/10/2023</p>
        </div>
      </div>
      <div className="reserve-item-left">
        <div className="status">EM ANDAMENTO</div>
        <p className="reserve-price">U$300.000</p>
      </div>
    </div>
  );
};
export { ReserveItem };
