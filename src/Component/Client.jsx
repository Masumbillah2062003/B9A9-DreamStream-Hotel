import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import user1 from "../assets/images/user-1.png"
import user2 from "../assets/images/user-2.png"
import user3 from "../assets/images/user-3.png"


const Client = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section>
      <h1 className="text-center font-[600] text-[#000] lg:text-5xl text-3xl mt-5 lg:mt-0">
        Happy <span className="text-[#287159]">Clients</span>
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
              className="w-32 h-32"
            />
          </figure>
          <div className="lg:p-5 p-1 pt-5 text-center space-y-4">
            <p className="text-[#6C6C6C] leading-7 lg:text-base text-sm font-[400] ">
              Slate helps you see how many more days you need to work to reach
              your financial goal for the month and year.
            </p>
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <p className="text-sm text-[#23A6F0]">Regina Miles</p>
            <p className="text-sm text-[#252B42]">Businessman</p>
          </div>
        </div>
        <div className="card lg:w-86 w-full bg-base-100 shadow-xl mt-14 border-2 border-[#DEDEDE]">
          <figure className="p-5">
            <img
              src={user2}
              alt="Shoes"
              className="w-32 h-32"
            />
          </figure>
          <div className="lg:p-5 p-1 pt-5 text-center space-y-4">
            <p className="text-[#6C6C6C] leading-7 lg:text-base text-sm font-[400] ">
              Slate helps you see how many more days you need to work to reach
              your financial goal for the month and year.
            </p>
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <p className="text-sm text-[#23A6F0]">Mr. Been</p>
            <p className="text-sm text-[#252B42]">Banker</p>
          </div>
        </div>
        <div className="card lg:w-86 w-full bg-base-100 shadow-xl mt-14 border-2 border-[#DEDEDE]">
          <figure className="p-5">
            <img
              src={user3}
              alt="Shoes"
              className="w-32 h-32"
            />
          </figure>
          <div className="lg:p-5 p-1 pt-5 text-center space-y-4">
            <p className="text-[#6C6C6C] leading-7 lg:text-base text-sm font-[400] ">
              Slate helps you see how many more days you need to work to reach
              your financial goal for the month and year.
            </p>
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <p className="text-sm text-[#23A6F0]">David Margan</p>
            <p className="text-sm text-[#252B42]">Doctor</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;
