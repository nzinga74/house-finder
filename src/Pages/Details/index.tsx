import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import FirstHomeIMG from "../../assets/details1.jpg";
import SecondHomeIMG from "../../assets/details2.jpg";
import ThirdHomeIMG from "../../assets/details3.jpg";
import FOurHomeIMG from "../../assets/details4.jpg";
import FiveHomeIMG from "../../assets/details5.jpg";
import { FaBath, FaDesktop } from "react-icons/fa";
import { FaKitchenSet, FaLocationDot } from "react-icons/fa6";
import "./style/index.css";
import GoogleMapReact from "google-map-react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProperty } from "../../services/gets";
import { IProperty } from "../../models/property/IProperty";
import { baseURL } from "../../services/api";

const Details = () => {
  const { id } = useParams();
  const [property, setProperty] = useState<IProperty>({} as IProperty);
  useEffect(() => {
    initialPropertyData();
  }, []);
  const initialPropertyData = async () => {
    try {
      if (id) {
        const propertyId = parseInt(id);
        const property = await getProperty(propertyId);
        setProperty(property);
      }
    } catch (error) {
      console.log(error);
    }
  };
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
              <h2>{property.name}</h2>
              <img
                className="imgCenter"
                src={
                  property.PropertyImages == undefined
                    ? FirstHomeIMG
                    : `${baseURL}/static/${property?.PropertyImages[0].image}`
                }
              />
              <div className="imgContainer">
                {property?.PropertyImages?.map((propertyImage) => (
                  <img src={`${baseURL}/static/${propertyImage.image}`} />
                ))}
              </div>
              <div className="description-container">
                <h3>Descrição</h3>
                <p>{property.description}</p>
              </div>
              <div className="details-icon-container">
                <div className="detail-item-icon">
                  <FaBath />
                  <p>{property.numberOfBedrooms} Casas de banho</p>
                </div>
                <div className="detail-item-icon">
                  <FaDesktop />
                  <p>{property.numberOfBedrooms} EScritórios </p>
                </div>
                <div className="detail-item-icon">
                  <FaKitchenSet />
                  <p>{property.numberOfBedrooms} Cozinhas </p>
                </div>
              </div>
              {/* <div className="map-container">
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: "AIzaSyAmpwhhr2Ze6bApN3AgTiM12dUpKTd1kKU",
                  }}
                  defaultCenter={defaultProps.center}
                  defaultZoom={defaultProps.zoom}
                />
              </div> */}
              <div className="reserve-button-container">
                <h4>Realizar reserva</h4>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature
                </p>
                <p />
                <button className="reserve-button">Reservar</button>
              </div>
            </div>
            <div className="detail-right">
              <h3>ÚLTIMAS NOVIDADES</h3>
              <div className="house-news-container">
                {[0, 0, 0, 0].map((t) => (
                  <div className="house-news-item">
                    <div className="house-news-item-img">
                      <img src={FiveHomeIMG} />
                    </div>
                    <div className="house-news-item-content">
                      <h4>CASA MODERNA XPTO 12</h4>
                      <div className="house-news-icon">
                        <FaLocationDot />
                        <p>Rua Miranda, Casa 12</p>
                      </div>
                      <p className="house-news-price">$4560</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Details;
