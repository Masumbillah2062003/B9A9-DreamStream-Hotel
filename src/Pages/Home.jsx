import Bed from "../Component/Bed";
import Slider from "../Component/Slider";

import "swiper/css";
import "../Pages/home.css";
import Food from "../Component/Food";

const Home = () => {
  return (
    <div>
      <div className="bg"></div>
      <div className="bg-slate-100">
        <Slider></Slider>
        <div>
          <Bed></Bed>
        </div>
      </div>
      <div className="w-full h-screen flex justify-center items-center">
          <Food></Food>
        </div>
    </div>
  );
};

export default Home;
