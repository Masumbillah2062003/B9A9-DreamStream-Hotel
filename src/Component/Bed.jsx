import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const Bed = ({ data }) => {
    const {catchUp} = useContext(AuthContext)
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

  return (
    <div>
      <div className="w-80 lg:w-full p-6 rounded-2xl border-2 border-[#023222]  space-y-6">
        <figure className="bg-[#F3F3F3] w-[440px] h-[220px] rounded-2xl flex justify-center items-center">
          <img
            src={image}
            alt="comming"
            className="w-full h-full rounded-2xl"
          />
        </figure>
        <div className="space-y-4 ">
          <div className="flex items-center gap-10 text-[#023222] font-medium">
            {facilities.map((data, idx) => (
              <div key={idx}>
                <p className="bg-[#0232226d] text-[#023222] rounded-[30px] py-2 px-2"> 
                  #{data}
                </p>
              </div>
            ))}
          </div>
          <h2 className="text-2xl font-bold">{hotel_title}</h2>
          <h2 className="text-xl font-bold">{Speciality_name}</h2>
          <p className="font-medium text-[#023222]">Price : {price}</p>
          <div className="flex items-center justify-between text-[#023222] font-medium pt-6 border-t border-dashed">
            <p>Location : {location}</p>
            <Link to={catchUp ? `/data/${id}` : '/login'}><button className="btn bg-[#023222] text-white hover:bg-white border-2 hover:border-[#023222] hover:text-[#023222]">{button}</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bed;

Bed.propTypes = {
    data: PropTypes.object
}
