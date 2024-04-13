import food from "../assets/images/hotel-facility-one.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Food = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="bg-slate-100 flex flex-col lg:flex-row items-center justify-center lg:p-10 lg:w-[1000px] lg:h-[325px] h-[700px] mx-auto gap-8 border-2 border-[#023222]"
      data-aos="zoom-in-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
    >
      <figure>
        <img
          src={food}
          alt=""
          className="lg:w-[43rem] w-full h-[170px] lg:h-[255px]"
        />
      </figure>
      <div className="space-y-2 text-center lg:text-start">
        <p>THE WORLD CLASS</p>
        <h2 className="text-4xl">RESTAURANT & BANQUETS</h2>
        <p>
          Semper ac dolor vitae accumsan. Cras interdum hendrerit lacinia.
          Phasellus accumsan urna vitae molestie interdum. Nam sed placerat
          libero, non eleifend dolor. <br />
          Cras ac justo et augue suscipit euismod vel eget lectus. Proin
          vehicula nunc arcu, pulvinar accumsan nulla porta vel. Vivamus
          malesuada vitae sem ac pellentesque.
        </p>
        <p className="space-x-4 text-sky-800 flex flex-wrap justify-center items-center lg:justify-normal lg:items-start">
          <a href="/">SERVICE HOURS; 19.00-22:00 </a>
          <a href="/">SERVICE CHARGE : $15</a>
        </p>
      </div>
    </div>
  );
};

export default Food;
