import HouseItem from "../../../components/HouseItem";
import "./style/index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

interface HouseProps {
  title: string;
}

const House = ({ title }: HouseProps) => {
  return (
    <>
      <div className="container">
        <div className="house-container">
          <h3>{title}</h3>
          <Swiper
            modules={[Autoplay]}
            autoplay
            spaceBetween={50}
            slidesPerView={4}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <HouseItem />
            </SwiperSlide>
            <SwiperSlide>
              <HouseItem />
            </SwiperSlide>
            <SwiperSlide>
              <HouseItem />
            </SwiperSlide>
            <SwiperSlide>
              <HouseItem />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default House;
