import { FaLocationDot, FaCalendar, FaCalendarCheck } from "react-icons/fa6";
import "./style/index.css";
import { IReserve } from "../../models/reserve/IReserve";
interface IReserveProps {
  reserve: IReserve;
  isSelected: boolean
  onClick():void
}
const ReserveItem = ({ reserve,onClick, isSelected }: IReserveProps) => {
  return (
    <div className={`reserve-item ${isSelected ? "selected-contract" : "" }`}  onClick={()=> onClick()}>
      <div>
        <h4>{reserve.property?.name}</h4>

        <div className="house-news-icon">
          <FaCalendar />
          <p>Data Sugerida: {reserve.estimatedDate?.toLocaleString()} </p>
        </div>
        <div className="house-news-icon">
          <FaCalendarCheck />
          <p>
            Data Marcada:
            {reserve.scheduledDate != null
              ? reserve.scheduledDate.toLocaleString()
              : " Indefinido"}
          </p>
        </div>
      </div>
      <div className="reserve-item-left">
        <div
          className={`status ${
            reserve.scheduledDate != null ? "status-green" : ""
          }`}
        >
          {reserve.scheduledDate == null ? "EM ANDAMENTO" : "ACEITE"}
        </div>
        <p className="reserve-price">U${reserve.property?.price}</p>
      </div>
    </div>
  );
};
export { ReserveItem };
