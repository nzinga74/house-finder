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

const Reserve = () => {
  return (
    <>
      <Header />
      <div className="reserve-container">
        <div className="container">
          <div className="reserve-list-container">
            <div className="reserve-list-left">
              <ReserveItem />
              <ReserveItem />
              <ReserveItem />
              <ReserveItem />
            </div>

            <div className="reserve-list-right">
              <h3>CASA MODERNA XPTO 12</h3>
              <img className="imgCenter" src={FirstHomeIMG} />
              <div className="imgContainer">
                <img src={SecondHomeIMG} />
                <img src={ThirdHomeIMG} />
                <img src={FOurHomeIMG} />
                <img src={FiveHomeIMG} />
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
