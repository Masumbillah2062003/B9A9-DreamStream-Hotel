import { useContext } from "react";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import "./style/login.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const UpdateProfile = () => {
  const { catchUp, setFatching } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photourl.value;
    console.log(name, photoUrl);

    updateProfile(catchUp, {
      displayName: name,
      photoURL: photoUrl,
    }).then(() => {
      setFatching(true);
    });
    return toast.success("your update profile successfull ");
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className="hero logbg">
        <div
          data-aos="zoom-in-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
        >
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Update Profile</h1>
          </div>
          <div className="card mt-9 lg:w-[500px] border-2 border-[#023222]  shadow-2xl bg-transparent backdrop-blur-sm">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  defaultValue={catchUp.displayName}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo_URL</span>
                </label>
                <input
                  type="text"
                  placeholder="photoURL"
                  name="photourl"
                  defaultValue={catchUp.photoURL}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  value={catchUp.email}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#023222] hover:bg-[#023222] text-white">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;

