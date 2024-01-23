import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import FirstHomeIMG from "../../assets/details1.jpg";
import SecondHomeIMG from "../../assets/details2.jpg";
import ThirdHomeIMG from "../../assets/details3.jpg";
import FOurHomeIMG from "../../assets/details4.jpg";
import FiveHomeIMG from "../../assets/details5.jpg";
import { FaBath, FaDesktop } from "react-icons/fa";
import { FaKitchenSet } from "react-icons/fa6";
import "./style/index.css";
const Details = () => {
  return (
    <>
      <Header />
      <div className="details-container">
        <div className="container">
          <h2>CASA MODERNA XPTO 12</h2>
          <img className="imgCenter" src={FirstHomeIMG} />
          <div className="imgContainer">
            <img src={SecondHomeIMG} />
            <img src={ThirdHomeIMG} />
            <img src={FOurHomeIMG} />
            <img src={FiveHomeIMG} />
          </div>
          <div className="details-icon-container">
            <div className="detail-item-icon">
              <FaBath />
              <p>2 Casas de banho</p>
            </div>
            <div className="detail-item-icon">
              <FaDesktop />
              <p>2 EScritórios </p>
            </div>
            <div className="detail-item-icon">
              <FaKitchenSet />
              <p>2 Cozinhas </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Details;
