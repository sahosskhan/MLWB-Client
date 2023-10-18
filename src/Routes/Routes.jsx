import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Page/Home";
import Error from "../Page/Error";
import ProductAdd from "../Page/AddProduct/ProductAdd";
import SignIn from "./../Page/SignInUp/SignIn";
import SignUp from "../Page/SignInUp/SignUp";
import BrandProduct from "../Page/BrandsProduct/BrandProduct";
import UpdateContent from "../Page/UpdateContent";
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
        path: "/productadd",
        element: <ProductAdd></ProductAdd>,
      },
      {
        path: "/login",
        element: <SignIn></SignIn>,
      },
      {
        path: "/register",
        element: <SignUp></SignUp>,
      },
      {
        path: "/brandproduct/:brand",
        element: <BrandProduct></BrandProduct>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/content/${params?.brand}`),
      },
      {
        path: "/update",
        element: <UpdateContent></UpdateContent>,
        // loader: ({ params }) =>
        // fetch(`http://localhost:5000/content/${params?.id}`),
      },
    ],
  },
]);
export default router;
