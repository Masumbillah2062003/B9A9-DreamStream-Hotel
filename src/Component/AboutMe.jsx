import me from "../assets/images/Untitled-e.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AboutMe = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="container mx-auto mt-28 lg:h-[500px] lg:p-0  p-5"
    >
      <h1 className="lg:text-6xl text-4xl font-bold text-center" data-aos="fade-down"
      data-aos-anchor-placement="top-bottom"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out">
        About <span className="text-[#1f624c]">Me!</span>
      </h1>
      <div className="mt-12 flex gap-6 items-center justify-center lg:flex-row flex-col ">
        <figure className="lg:w-1/3 flex justify-center items-center">
          <img src={me} alt="" className="w-[250px] h-[250px]" data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"/>
        </figure>
        <div className="lg:w-2/3 space-y-5">
          <h2 className="text-3xl font-bold" data-aos="fade-down-left">
            Hi, I am Here To Help Your Next Project!
          </h2>
          <p data-aos="fade-down-right">
            My name is Masum Billah.I am a student. I study at Munshiganj
            Polytechnic Institute in <br /> Department of Computer Science &
            technology at 4th semester.Now, I am learning <br /> Web Design &
            Development and basic Adobe PhotoShop.
          </p>
          <button className="btn text-white text-2xl bg-[#023222] hover:bg-transparent hover:border-[#023222] hover:text-[#023222] px-7 lg:w-[20%] mr-7">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
