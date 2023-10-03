import { createBrowserRouter } from "react-router-dom";
// import ErrorPage from "./error-page";
import Root from "../layouts/Root";
import Home from "../pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

export default router;
