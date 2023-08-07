import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import slider1 from "../../../assets/home/slide1.jpg";
import slider2 from "../../../assets/home/slide2.jpg";
import slider3 from "../../../assets/home/slide3.jpg";
import slider4 from "../../../assets/home/slide4.jpg";
import slider5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Catrgory = () => {
  return (
    <section>
      <SectionTitle
        subheading={"From 11.00am to 10.00pm"}
        heading={"Order Online"}
      ></SectionTitle>
      <div className="p-5 border">
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
        >
          <SwiperSlide>
            <img className="border rounded-md" src={slider1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="border rounded-md" src={slider2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="border rounded-md" src={slider3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="border rounded-md" src={slider4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="border rounded-md" src={slider5} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Catrgory;
