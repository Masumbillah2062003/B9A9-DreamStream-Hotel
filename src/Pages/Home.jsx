import Bed from "../Component/Bed";
import Slider from "../Component/Slider";

import "swiper/css";
import "./home.css";
import Food from "../Component/Food";

import { useLoaderData } from "react-router-dom";
import Client from "../Component/Client";

const Home = () => {
  const allData = useLoaderData();
  console.log(allData);

  return (
    <div>
      <div className="bg"></div>
      <div className="bg-slate-100 pb-12">
        <Slider></Slider>
        <div>
          <h1 className="text-center text-4xl font-semibold mt-16 underline">
            Bed Room
          </h1>
          <div className="lg:mt-16 mt-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {allData.map((data) => (
              <Bed key={data.id} data={data}></Bed>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full lg:h-[700px] h-[900px] flex justify-center items-center">
        <Food></Food>
      </div>
      <div className="w-full lg:h-[700px] h-auto mb-10 lg:mb-0 flex justify-center items-center bg-white">
        <Client></Client>
      </div>
    </div>
  );
};

export default Home;
