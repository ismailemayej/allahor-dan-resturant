import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main";
import Home from "../../pages/Home/Home";
import Menu from "../../pages/Menu/Menu";
import Order from "../../pages/Order/Order";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Secret from "../../pages/Shared/MenuItem/Secret/Secret";
import PrivateRoutes from "../../Provider/PrivateRoutes/PrivateRoutes";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "order/:category",
        element: <Order></Order>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "secret",
        element: (
          <PrivateRoutes>
            <Secret></Secret>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
