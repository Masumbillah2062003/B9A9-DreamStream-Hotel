import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from 'react-hot-toast';


const Register = () => {

  const {createSignUp} = useContext(AuthContext)
  const [showPass, setShowPass] = useState(false)


  const handleRegister = (e) =>{
    e.preventDefault()
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoUrl = e.target.photourl.value;
    console.log(name, email, password, photoUrl)

    if(password.length < 6){
      console.log('password least 6 chraacter or longer')
      return toast.error("password least 6 chraacter or longer")
    }
    else if(!/[A-Z]/.test(password)){
      return toast.error('your password should have at least one upper case characters [[A-Z]]')
    }
    else if(!/[a-z]/.test(password)){
      return toast.error('your password should have at least one Lower case characters [[a-z]]')
    }
    


    createSignUp(email, password)
    .then(result => {
      console.log(result.user)
      updateProfile(result.user, {
        displayName: name,
        photoURL: photoUrl
      })
    })
    .catch(error => {
      console.error(error)
    })

    return toast.success('successfull your register')
  }
  return (
    <div>
      <div className="hero">
        <div className="mt-5">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Register</h1>
          </div>
          <div className="card mt-9 lg:w-[500px] border-2 border-[#023222]  shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
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
                  className="input input-bordered"
                  required
                />
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
                    required
                  />
                  <span className="absolute right-4 text-2xl mt-3 cursor-pointer"></span>
                  <span
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-4 text-2xl mt-3 cursor-pointer"
                >
                  {showPass ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                </span>
                </div>
              </div>
              <div>
                <input type="checkbox" name="checkbox" className="mr-3" />
                <span>
                  Accept our
                  <a href="" className="underline">
                    Terms and conditions
                  </a>
                </span>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#023222] hover:bg-[#023222] text-white">Register</button>
              </div>
            </form>
            <div className="p-4 text-center">
              <p>
                Already have an account ?
                <Link to="/login" className="underline font-bold text-blue-400">
                  Log In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
