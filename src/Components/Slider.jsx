import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slider = () => {
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="lg:mx-[570px] "
      >
        <SwiperSlide>
          {" "}
          <img
            className="w-[800px]"
            src="https://i.ibb.co/4W5py54/download-mlwbd-apk-for-android.jpg"
            alt="Advertisement 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className="w-[800px]"
            src="https://i.ibb.co/tx8Vz6c/mlwbd.jpg"
            alt="Advertisement 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[800px]"
            src="https://i.ibb.co/1vzSx4R/mlwbd-apk-3.jpg"
            alt="Advertisement 1"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
