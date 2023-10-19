import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Page/Home";
import Error from "../Page/Error";
import ProductAdd from "../Page/AddProduct/ProductAdd";
import SignIn from "./../Page/SignInUp/SignIn";
import SignUp from "../Page/SignInUp/SignUp";
import BrandProduct from "../Page/BrandsProduct/BrandProduct";
import UpdateContent from "../Page/UpdateContent";
import MyCart from "../Page/MyCart";
import PrivateRoute from "./PrivateRoute";
import ViewDetails from "../Page/ViewDetails";
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
        path: "/mycart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
      },
      {
        path: "/viewdetails/:id",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-a10-server-8uj11cpgh-sahosskhan359-gmailcom.vercel.app/contentS/${params?.id}`
          ),
      },
      {
        path: "/brandproduct/:brand",
        element: <BrandProduct></BrandProduct>,
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-a10-server-8uj11cpgh-sahosskhan359-gmailcom.vercel.app/content/${params?.brand}`
          ),
      },
      {
        path: "/update",
        element: <UpdateContent></UpdateContent>,
        // loader: ({ params }) =>
        // fetch(`https://brand-shop-a10-server-8uj11cpgh-sahosskhan359-gmailcom.vercel.app/content/${params?.id}`),
      },
    ],
  },
]);
export default router;
