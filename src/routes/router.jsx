import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Root from "../layouts/Root";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
