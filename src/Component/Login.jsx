import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import google from "../assets/images/google.png";
import github from "../assets/images/github.png";
import facebook from "../assets/images/facebook.png";

import "./style/login.css";

const Login = () => {
  const { userLogIn, googleSignIn, gitHubSignIn, facebookSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogIn = (data) => {
    // e.preventDefault()
    // const email = e.target.email.value;
    // const password = e.target.password.value;
    // console.log(email, password);

    const { email, password } = data;

    if (password.length < 6) {
      console.log("password least 6 chraacter or longer");
      return toast.error("password least 6 chraacter or longer");
    } else if (!/[A-Z]/.test(password)) {
      return toast.error(
        "your password should have at least one upper case characters [[A-Z]]"
      );
    } else if (!/[a-z]/.test(password)) {
      return toast.error(
        "your password should have at least one Lower case characters [[a-z]]"
      );
    }

    userLogIn(email, password)
      .then((result) => {
        console.log(result.user);
        // e.target.reset();
        navigate("/");
        return toast.success("your log in successfull");
      })
      .catch((error) => {
        console.error(error);
        return toast.error("your email with password no match");
      });
  };

  const handleGoogleLogIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result);
        return toast.success("google log in successfull");
      })
      .catch((error) => {
        console.error(error);
        return toast.error("google log in failed");
      });
  };
  const handleGitHubLogIn = () => {
    gitHubSignIn()
      .then((result) => {
        console.log(result);
        return toast.success("Github log in successfull");
      })
      .catch((error) => {
        console.error(error);
        return toast.error("Github log in failed");
      });
  };
  const handleFacebookLogIn = () => {
    facebookSignIn()
      .then((result) => {
        console.log(result);
        return toast.success("Facebook log in successfull");
      })
      .catch((error) => {
        console.error(error);
        return toast.error("Facebook log in failed");
      });
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="hero logbg">
      <div
        data-aos="zoom-in-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
      >
        <div className="text-center">
          <h1 className="text-5xl font-bold">Log In</h1>
        </div>
        <div className="card mt-9 lg:w-[500px] border-2 border-[#023222] shadow-2xl bg-transparent backdrop-blur-sm">
          <form onSubmit={handleSubmit(handleLogIn)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <div className="relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="password"
                  name="password"
                  className="input input-bordered w-full pr-12"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-600">This field is required</span>
                )}
                <span className="absolute right-4 text-2xl mt-3 cursor-pointer"></span>
                <span
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-4 text-2xl mt-3 cursor-pointer"
                >
                  {showPass ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                </span>
              </div>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#023222] hover:bg-[#023222] text-white">
                Log In
              </button>
            </div>
          </form>
          <div className="text-center flex justify-center items-center gap-6">
            <button onClick={handleGoogleLogIn} className="active:scale-90 duration-150 w-12 h-12 rounded-full">
              <img src={google} alt=""  className="w-full h-full"/>
            </button>
            <button onClick={handleGitHubLogIn} className="active:scale-90 w-12 h-12 duration-150">
              <img src={github} alt="" className="w-full h-full"/>
            </button>
            <button onClick={handleFacebookLogIn} className="active:scale-90 w-12 h-12   duration-150">
              <img src={facebook} alt="" className="w-full h-full"/>
            </button>
          </div>
          <div className="p-4 text-center">
            <p>
              New to this website ? Please ?
              <Link
                to="/register"
                className="underline font-bold text-blue-400"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
