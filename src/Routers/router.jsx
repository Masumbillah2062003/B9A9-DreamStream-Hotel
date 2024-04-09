import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Login from "../Component/Login";
import Register from "../Component/Register";
import Home from "../Pages/Home";
import Bed_Details from "../Component/Bed_Details";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: ()=> fetch("/hotal.json")
        },
        {
          path:"/data/:id",
          element: <Bed_Details></Bed_Details>,
          loader: ()=> fetch("/hotal.json")
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        }
      ]
    },
  ]);

export default router