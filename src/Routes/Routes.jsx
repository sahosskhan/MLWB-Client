import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Page/Home";
import Error from "../Page/Error";
import ProductAdd from "../Page/AddProduct/ProductAdd";
import SignIn from "./../Page/SignInUp/SignIn";
import SignUp from "../Page/SignInUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/Brand.json"),
      },
      {
        path: "/ProductAdd",
        element: <ProductAdd></ProductAdd>,
      },
      {
        path: "/Login",
        element: <SignIn></SignIn>,
      },
      {
        path: "/Register",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
export default router;
