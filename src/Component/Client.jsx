import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import user1 from "../assets/images/img1.webp"
import user2 from "../assets/images/images2.jpg"
import user3 from "../assets/images/078A3253-3.jpg"


const Client = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section>
      <h1 className="text-center font-[600] text-[#000] lg:text-5xl text-3xl mt-5 lg:mt-0">
        Happy <span className="text-[#287159]">Work & Play</span>
      </h1>
      <div
        className="grid lg:grid-cols-3 grid-cols-1 lg:gap-10 lg:mx-12"
        data-aos="zoom-in-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
      >
        <div className="card lg:w-86 w-full bg-base-100 shadow-xl mt-14 border-2 border-[#DEDEDE]">
          <figure className="p-5">
            <img
              src={user1}
              alt="Shoes"
              className="h-[200px] w-full"
            />
          </figure>
          <div className="lg:p-5 p-1 pt-5 text-center space-y-4">
            <h2 className="text-3xl">Epicurean Theatre</h2>
            <p className="text-[#6C6C6C] leading-7 lg:text-base text-sm font-[400] ">
            Dramatic setting for private events. Corporate team building. And creative, entertaining classes open to all.
            </p>
            <button className="btn bg-[#023222] hover:bg-[#023222] text-white font-semibold">EXPLORE THE THEATRE</button>
          </div>
        </div>
        <div className="card lg:w-86 w-full bg-base-100 shadow-xl mt-14 border-2 border-[#DEDEDE]">
          <figure className="p-5">
            <img
              src={user2}
              alt="Shoes"
              className="h-[200px] w-full"
            />
          </figure>
          <div className="lg:p-5 p-1 pt-5 text-center space-y-4">
            <h2 className="text-3xl">Relax</h2>
            <p className="text-[#6C6C6C] leading-7 lg:text-base text-sm font-[400]">
            Take time to unwind at Spa Evangeline after a bicycle tour, swim in the pool or visit to our fitness center.
            </p>
            <button className="btn  bg-[#023222] hover:bg-[#023222] text-white font-semibold">UNWIND & RELAX</button>
          </div>
        </div>
        <div className="card lg:w-86 w-full bg-base-100 shadow-xl mt-14 border-2 border-[#DEDEDE]">
          <figure className="p-5">
            <img
              src={user3}
              alt="Shoes"
              className="h-[200px] w-full"
            />
          </figure>
          <div className="lg:p-5 p-1 pt-5 text-center space-y-4">
            <h2 className="text-3xl">Weddings & Events</h2>
            <p className="text-[#6C6C6C] leading-7 lg:text-base text-sm font-[400]">
            An exceptionally unique location for your next celebration or meeting. For every need, we have a solution.
            </p>
            <button className="btn  bg-[#023222] hover:bg-[#023222] text-white font-semibold">HOST YOUR EVENT</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;
