import Bed from "../Component/Bed";
import Slider from "../Component/Slider";

import "swiper/css";
import "../Pages/home.css";
import Food from "../Component/Food";

import { useLoaderData } from "react-router-dom";

const Home = () => {
  const allData = useLoaderData();
  console.log(allData)
  return (
    <div>
      <div className="bg"></div>
      <div className="bg-slate-100 pb-12">
        <Slider></Slider>
        <div className="lg:mt-16 mt-8 grid lg:grid-cols-3 grid-cols-1 gap-6">
          {
            allData.map((data) => <Bed key={data.id} data={data}></Bed> )
          }
          
        </div>
      </div>
      <div className="w-full h-screen flex justify-center items-center">
        <Food></Food>
      </div>
    </div>
  );
};

export default Home;
