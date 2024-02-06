import HouseItem from "../../../components/HouseItem";
import "./style/index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { IProperty } from "../../../models/property/IProperty";

interface HouseProps {
  title: string;
  properties: IProperty[];
}

const House = ({ title, properties }: HouseProps) => {
  return (
    <>
      <div className="container">
        <div className="house-container">
          <h3>{title}</h3>
          <Swiper
            modules={[Autoplay]}
            autoplay
            spaceBetween={10}
            slidesPerView={4}
            onSlideChange={() => console.log("slide change")}
          >
            {properties.map((property) => (
              <>
                <SwiperSlide>
                  <HouseItem property={property} />
                </SwiperSlide>
              </>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default House;
