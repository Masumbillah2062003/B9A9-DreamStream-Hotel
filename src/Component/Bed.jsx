import { Link } from "react-router-dom";

const Bed = () => {
  return (
    // to={`/book/${id}`}
    <div className="lg:mt-16 mt-8 grid lg:grid-cols-3 grid-cols-1 gap-6">
      <Link>
        <div className="w-80 lg:w-full p-6 rounded-2xl border-[#13131326] space-y-6">
          <figure className="bg-[#F3F3F3] h-56 rounded-2xl flex justify-center items-center">
            <img src="" alt="comming" className=" w-[full] h-40" />
          </figure>
          <div className="space-y-4">
            <div className="flex items-center gap-10 text-[#23BE0A] font-medium">
              <p className="bg-[#23BE0A0D] rounded-[30px] py-2 px-4">#some</p>
              <p className="bg-[#23BE0A0D] rounded-[30px] py-2 px-4">#some</p>
            </div>
            <h2 className="text-2xl font-bold">title</h2>
            <p className="font-medium text-[#131313CC]">By : bed</p>
            <div className="flex items-center justify-between text-[#131313CC] font-medium pt-6 border-t border-dashed">
              <p>al</p>
              <p className="flex items-center gap-2">
                {/* <CiStar /> {rating} */}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Bed;
