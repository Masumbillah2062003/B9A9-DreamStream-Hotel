import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Login from "../Component/Login";
import Register from "../Component/Register";
import Home from "../Pages/Home";
import Bed_Details from "../Component/Bed_Details";
import UpdateProfile from "../Component/UpdateProfile";
import PrivateRoute from "./PrivateRoute";
import ErrorControl from "../Component/ErrorControl";
import AboutMe from "../Component/AboutMe";
import Maps from "../Component/Maps";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorControl></ErrorControl>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: ()=> fetch("/hotal.json")
        },
        {
          path:"/data/:id",
          element: <PrivateRoute><Bed_Details></Bed_Details></PrivateRoute>,
          loader: ()=> fetch("/hotal.json")
        },
        {
          path: "/updateProfile",
          element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
        },
        {
          path: "/aboutme",
          element: <AboutMe></AboutMe>
        },
        {
          path: "/map",
          element: <Maps></Maps>
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