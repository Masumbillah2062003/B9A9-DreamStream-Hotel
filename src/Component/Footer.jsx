import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import hotel from "../assets/images/hotel.png"

const Footer = () => {
  const { catchUp} = useContext(AuthContext);
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
              to="/information"
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
  return (
    <footer className="footer p-10 bg-[#16211e] text-white">
      <aside>
        <img src={hotel} alt="" className="w-20"/>
        <p>
        DreamStream Hotel Ltd.
          <br />
          Since 1992 we have been serving people beautifully and well
        </p>
      </aside>

      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">GuestRoom Gallery</a>
        <a className="link link-hover">Reservations</a>
        <a className="link link-hover">Help center</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <ul>
        {navLinks}
        </ul>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
