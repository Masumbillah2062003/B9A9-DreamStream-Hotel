import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

import "./style/login.css";

const Login = () => {
  const { userLogIn, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    userLogIn(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        navigate("/");
        return toast.success("your log in successfull");
      })
      .catch((error) => {
        console.error(error);
        return toast.error("your password no match");
      });
  };

  const handleGoogleLogIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="hero logbg">
      <div>
        <div className="text-center ">
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
          <div className="text-center">
            <button
              onClick={handleGoogleLogIn}
              className="btn bg-[#023222] hover:bg-[#023222] text-white"
            >
              Google
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
