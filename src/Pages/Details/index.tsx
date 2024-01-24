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
import GoogleMapReact from "google-map-react";
interface AnyProps {
  text: string;
}
const AnyReactComponent = ({ text }: AnyProps) => <div>{text}</div>;

const Details = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  return (
    <>
      <Header />
      <div className="details-container">
        <div className="container">
          <div className="detail-menu">
            <div className="detail-left">
              <h2>CASA MODERNA XPTO 12</h2>
              <img className="imgCenter" src={FirstHomeIMG} />
              <div className="imgContainer">
                <img src={SecondHomeIMG} />
                <img src={ThirdHomeIMG} />
                <img src={FOurHomeIMG} />
                <img src={FiveHomeIMG} />
              </div>
              <div className="description-container">
                <h3>Descrição</h3>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                  "de Finibus Bonorum et Malorum" (The Extremes of Good and
                  Evil) by Cicero, written in 45 BC. This book is a treatise on
                  the theory of ethics, very popular during the Renaissance. The
                  first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                  comes from a line in section 1.10.32.
                </p>
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
              <div className="map-container">
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: "AIzaSyAmpwhhr2Ze6bApN3AgTiM12dUpKTd1kKU",
                  }}
                  defaultCenter={defaultProps.center}
                  defaultZoom={defaultProps.zoom}
                ></GoogleMapReact>
              </div>
            </div>
            <div className="detail-right"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Details;
