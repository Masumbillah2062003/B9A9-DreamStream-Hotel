import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Login from "../Component/Login";
import Register from "../Component/Register";
import Home from "../Pages/Home";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: ()=> fetch('hotal.json')
        }
        ,
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