import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Pages/Home/Home";
import Product from "../Pages/product/Product";
import Cart from "../Pages/cart/Cart";
import Checkout from "../Pages/Checkout/Checkout";
import AllCategory from "../Pages/allCategory/AllCategory";
import Category from "../Pages/category/Category";
import Landing from "../Pages/landing/Landing";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/registration/Registration";



const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allCategory",
        element: <AllCategory />,
      },
  
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/landing",
        element: <Landing />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
  
      
      {
        path: "/checkout",
        element: <Checkout />,
      },
    

    ],
  },
]);

export default Routes;
