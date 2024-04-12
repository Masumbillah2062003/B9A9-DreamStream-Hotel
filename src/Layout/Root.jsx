import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const Root = () => {
  return (
    <main className="container mx-auto raleway">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </main>
  );
};

export default Root;
