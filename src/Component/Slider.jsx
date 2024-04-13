import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import slider1 from "../assets/images/slider-1.jpg";
import slider2 from "../assets/images/slider-3.jpg";
import slider3 from "../assets/images/slider-4.jpg";
import offer from "../assets/images/offer.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Slider = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className="hidden lg:block">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide className="h-[550px] relative">
            <img src={slider1} alt="" className="w-full h-[550px]" />
            <div className="absolute top-0 flex justify-around w-full h-full">
              <div className="flex flex-col justify-center items-start">
                <div
                  className="bg-[#ffffff70] backdrop-blur-sm p-6 rounded-lg border-2 border-[#164133]"
                  data-aos="flip-right"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                >
                  <h1 className="text-[#164133] text-6xl font-bold">
                    A BRAND NEW HOTEL <br /> BEYOUND ORDINARY
                  </h1>
                  <button className="btn mt-10 bg-[#023222] hover:bg-[#023222] text-white">
                    Explore Us
                  </button>
                </div>
              </div>
              <figure>
                <img src={offer} alt="" />
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-[550px] relative">
            <img src={slider2} alt="" className="w-full h-[550px]" />
            <div className="absolute top-0 flex justify-around w-full h-full">
              <div className="flex flex-col justify-center items-start">
                <div className="bg-[#ffffff70] backdrop-blur-sm p-6 rounded-lg border-2 border-[#164133]">
                  <h1 className="text-[#164133] text-6xl font-bold">
                    A BRAND NEW HOTEL <br /> BEYOUND ORDINARY
                  </h1>
                  <button className="btn mt-10 bg-[#023222] hover:bg-[#023222] text-white">
                    Explore Us
                  </button>
                </div>
              </div>
              <figure>
                <img src={offer} alt="" />
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-[550px] relative">
            <img src={slider3} alt="" className="w-full h-[550px]" />
            <div className="absolute top-0 flex justify-around w-full h-full">
              <div className="flex flex-col justify-center items-start">
                <div className="bg-[#ffffff70] backdrop-blur-sm p-6 rounded-lg border-2 border-[#164133]">
                  <h1 className="text-[#164133] text-6xl font-bold">
                    A BRAND NEW HOTEL <br /> BEYOUND ORDINARY
                  </h1>
                  <button className="btn mt-10 bg-[#023222] hover:bg-[#023222] text-white">
                    Explore Us
                  </button>
                </div>
              </div>
              <figure>
                <img src={offer} alt="" />
              </figure>
            </div>
          </SwiperSlide>
          ...
        </Swiper>
      </div>
      <div className="lg:hidden block">
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={slider1} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src={slider2} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={slider3} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
