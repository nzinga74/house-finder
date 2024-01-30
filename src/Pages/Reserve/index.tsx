import Footer from "../../components/Footer";
import FirstHomeIMG from "../../assets/details1.jpg";
import SecondHomeIMG from "../../assets/details2.jpg";
import ThirdHomeIMG from "../../assets/details3.jpg";
import FOurHomeIMG from "../../assets/details4.jpg";
import FiveHomeIMG from "../../assets/details5.jpg";
import { Header } from "../../components/Header";
import { FaLocationDot } from "react-icons/fa6";

import "./style/index.css";

const Reserve = () => {
  return (
    <>
      <Header />
      <div className="reserve-container">
        <div className="container">
          <div className="reserve-list-container">
            <div className="reserve-list-left">
              <div className="reserve-item">
                <div>
                  <h4>CASA MODERNA XPTO 12</h4>
                  <div className="house-news-icon">
                    <FaLocationDot />
                    <p>Rua Miranda, Casa 12</p>
                  </div>
                  <div className="status">EM ANDAMENTO</div>
                </div>
                <div />
              </div>
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
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Reserve;
