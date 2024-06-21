import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import profile from "../assets/images/profile.jpg";
import { CiLogout, CiLogin } from "react-icons/ci";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Navbar = () => {
  const { catchUp, logOut } = useContext(AuthContext);
  console.log(catchUp);

  const navLinks = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-xl font-semibold underline"
              : "text-xl font-semibold"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      {catchUp && (
        <>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-xl font-semibold underline"
                  : "text-xl font-semibold"
              }
              to="/aboutme"
            >
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-xl font-semibold underline"
                  : "text-xl font-semibold"
              }
              to="/updateProfile"
            >
              Update Profile
            </NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-xl font-semibold underline"
              : "text-xl font-semibold"
          }
          to="/map"
        >
          Map
        </NavLink>
      </li>
    </>
  );

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <nav className="navbar p-0 container mx-auto lg:fixed lg:z-50 lg:p-2 bg-[#023222] text-white top-0">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu-sm dropdown-content mt-4 -ml-4 z-[1] p-2 shadow bg-[#023222] rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost lg:text-3xl text-base">
            DreamStream Hotel
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" menu-horizontal px-1 gap-4">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <div>
            <div>
              {catchUp ? (
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full bg-white">
                      <abbr title={catchUp && catchUp.displayName}>
                        <img
                          alt="profile img"
                          src={catchUp ? catchUp.photoURL || profile : profile}
                        />
                      </abbr>
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className=" menu-sm dropdown-content mt-5 -mr-4 z-50 p-2 shadow bg-base-100 rounded-box w-52 border-2 border-[#023222]"  
                  >
                    <li className="text-[#023222] text-center text-xl font-semibold">
                      {catchUp && catchUp.displayName}
                    </li>
                    <li className="btn mt-4 w-full bg-[#023222] hover:bg-[#023222] text-white border-2 border-white rounded-xl font-semibold">
                      <Link
                        className="text-xl flex gap-4 items-center"
                        onClick={handleLogOut}
                      >
                        <span>Log Out</span> <CiLogout />
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                <button className="lg:btn px-2 py-1 hover:bg-[#023222] hover:text-white border-2 border-white rounded-xl font-semibold active:scale-90 duration-300">
                  <Link
                    className="lg:text-xl text-sm flex items-center lg:gap-2"
                    to="/login"
                  >
                    <span>Log In</span>{" "}
                    <CiLogin className="hidden lg:block"></CiLogin>
                  </Link>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;





