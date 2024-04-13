import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const My_Information = () => {
  const { catchUp } = useContext(AuthContext);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="flex justify-center items-center lg:h-[650px] h-[300px] gap-6"  data-aos="zoom-in-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true">
      <div className="border-2 border-[#164133] flex justify-center flex-col items-center lg:p-8 p-3 rounded-lg">
        <figure className="lg:w-[200px] lg:h-[200px] rounded-full border-2 border-[#164133] p-3">
          <img
            src={catchUp?.photoURL}
            alt="Profile photo is Comming soon......."
            className="w-full h-full rounded-full"
          />
        </figure>
        <div className="text-center space-y-4">
          <h1 className="font-bold lg:text-3xl text-xl">Name : {catchUp?.displayName || 'name is Comming Soon.........'}</h1>
          <h2 className="font-semibold lg:text-2xl text-lg">Email : {catchUp?.email || 'email is Comming Soon.........'}</h2>
        </div>
      </div>
    </div>
  );
};

export default My_Information;
