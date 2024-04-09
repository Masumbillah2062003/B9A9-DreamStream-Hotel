import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar";
// import bgimg from "../assets/images/background.jpg"

import '../Layout/root.css'
import Footer from "../Component/Footer";

const Root = () => {
    return (
        <main className="container mx-auto">
           <Navbar></Navbar>
           <div className="bg"></div>
           <Outlet></Outlet>
           <Footer></Footer>
        </main>
    );
};

export default Root;