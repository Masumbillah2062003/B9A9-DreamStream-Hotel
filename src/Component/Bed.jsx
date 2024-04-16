import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Bed = ({ data }) => {
  const {
    image,
    hotel_title,
    id,
    Speciality_name,
    price,
    location,
    facilities,
    button,
  } = data;
  console.log(data);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="flex justify-center items-center"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
    >
      <div className="w-80 lg:w-full p-6 rounded-2xl border-2 border-[#023222]  space-y-6">
        <figure className="bg-[#F3F3F3] lg:h-[220px] h-[150px] rounded-2xl flex justify-center items-center">
          <img
            src={image}
            alt="comming"
            className="w-full h-full rounded-2xl"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"/>
        </figure>
        <div className="space-y-4 ">
          <div className="flex items-center flex-wrap lg:flex-nowrap gap-3 lg:gap-10 text-[#023222] font-medium">
            {facilities.map((data, idx) => (
              <div key={idx} className="">
                <p className="bg-[#0232226d] text-[#023222] rounded-[30px] py-2 px-2" data-aos="fade-down-left">
                  #{data}
                </p>
              </div>
            ))}
          </div>
          <h2 className="lg:text-2xl text-xl font-bold" data-aos="fade-down-left">{hotel_title}</h2>
          <h2 className="lg:text-xl text-lg font-bold" data-aos="fade-down-left">{Speciality_name}</h2>
          <p className="font-medium text-[#023222]">
            {" "}
            <span className="text-2xl" data-aos="fade-down">Price : {price}/</span>night
          </p>
          <div className="flex flex-wrap gap-5 items-center justify-between text-[#023222] font-medium border-t border-dashed">
            <p data-aos="fade-down">Location : {location}</p>
            <Link to={`/data/${id}`}>
              <button className="btn bg-[#023222] text-white hover:bg-white border-2 hover:border-[#023222] hover:text-[#023222]" data-aos="fade-down-right">
                {button}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bed;

Bed.propTypes = {
  data: PropTypes.object,
};
