import Footer from "../../components/Footer";
import FirstHomeIMG from "../../assets/details1.jpg";
import SecondHomeIMG from "../../assets/details2.jpg";
import ThirdHomeIMG from "../../assets/details3.jpg";
import FOurHomeIMG from "../../assets/details4.jpg";
import FiveHomeIMG from "../../assets/details5.jpg";
import { Header } from "../../components/Header";
import { FaLocationDot, FaCalendar, FaCalendarCheck } from "react-icons/fa6";

import "./style/index.css";
import { ReserveItem } from "../../components/ReserveItem";
import { useEffect, useState } from "react";
import { IReserve } from "../../models/reserve/IReserve";
import { getReserves } from "../../services/gets";
import { baseURL } from "../../services/api";

const Reserve = () => {
  useEffect(() => {
    initialData();
  }, []);
  const [reserves, setReserves] = useState<IReserve[]>([]);
  const [selectedReserveIndex, setSelectedReserveIndex] = useState<number>(0);
  const initialData = async () => {
    const clientId = 1;
    const allReserves = await getReserves(clientId);
    if (allReserves) {
      setReserves(allReserves);
    }
  };
  const selectedReserve = reserves[selectedReserveIndex];
  const selectedProperty = selectedReserve?.property
  return (
    <>
      <Header />
      <div className="reserve-container">
        <div className="container">
          <div className="reserve-list-container">
            <div className="reserve-list-left">
              {reserves.map((reserve, index) => (
                <ReserveItem reserve={reserve} onClick={()=> setSelectedReserveIndex(index)} isSelected={selectedReserveIndex == index} />
              ))}
            </div>

            <div className="reserve-list-right">
              <h3>{selectedProperty?.name}</h3>
              <img className="imgCenter" src={selectedProperty?.PropertyImages != undefined ? `${baseURL}/static/${selectedProperty?.PropertyImages[0]?.image}` : FirstHomeIMG} />
              <div className="imgContainer">
                {selectedProperty?.PropertyImages?.map( images => (
                  <img src={`${baseURL}/static/${images?.image}`} />
                ))}
                
                
              </div>
              <div className="reserve-button-container">
                <h4>Editar reserva</h4>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                </p>
                <p />
                <button className="reserve-button">Editar Reservar</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Reserve;
