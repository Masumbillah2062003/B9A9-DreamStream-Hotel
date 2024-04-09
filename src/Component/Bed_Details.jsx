import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const Bed_Details = () => {
  const data = useLoaderData();

  const { id } = useParams();
  const [details, setDetails] = useState({});

  const {
    image,
    hotel_title,
    Speciality_name,
    description,
    price,
    status,
    area,
    location,
    button,
  } = details;


  useEffect(() => {
    const found = data.find((b) => b.id == id);
    setDetails(found);
  }, [id, data]);

  console.log(details);
  console.log(typeof id);
  return (
    <div className="lg:h-[711px] flex lg:flex-row flex-col gap-12 container mx-auto lg:mt-14 mt-5 mb-14 p-4 lg:p-0">
      <figure className="h-full lg:w-1/2 lg:p-16 flex justify-center items-center rounded-2xl border-2 border-[#023222]">
        <img
          src={image}
          alt=""
          className="lg:w-full rounded-xl lg:h-[564px] w-[150px] h-[200px]"
        />
      </figure>
      <div className="lg:w-1/2 flex flex-col">
        <h1 className="font-bold lg:text-4xl text-2xl pb-5">{hotel_title}</h1>
        <h1 className="font-bold lg:text-4xl text-2xl pb-5">
          {Speciality_name}
        </h1>
        <hr />
        <p className="lg:text-xl text-lg font-medium py-5">{status}</p>
        <hr />
        <p className="text-[#023222] py-5">
          <span className="font-bold text-[#023222]">Review :</span> {description}
        </p>
        <div className="flex gap-5 text-[#023222] py-4 items-center">
          <p className="text-lg text-[#023222] font-medium">Tag :</p>
          
        </div>
        <hr />
        <div className="py-5 space-y-4 flex-grow">
          <p className=" text-[#023222] text-lg font-medium rounded-[30px] py-2 px-2">
            Area : {area}
          </p>
          <p className=" text-[#023222] text-lg font-medium rounded-[30px] py-2 px-2">
            Location : {location}
          </p>
        </div>
        <p className="lg:text-xl text-xl font-medium py-5"><span className="text-2xl">Price : {price}/</span>night</p>
        <div className="flex gap-5   font-semibold text-lg">
          <Link to="/"><button className="btn hover:bg-[#023222] bg-[#023222] text-white">{button}</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Bed_Details;
