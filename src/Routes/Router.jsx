import { createBrowserRouter } from "react-router-dom";
import Details from "../Components/Product/Details";
import Error from "../Error/Error";
import Root from "../Root";
import Add from "../layout/AddProdact/Add";
import Home from "../layout/Home/Home";
import Login from "../layout/Log/Login";
import SignUP from "../layout/Log/SignUP";
import Shop from "../layout/Shop/Shop";
import PrivetRoute from "./PrivetRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <Error/>,
      children: [
        {
          path: "/",
          element: <Home/>,
          loader: () => fetch('https://server-sigma-pied.vercel.app/product')
        },
        {
          path: "/shop",
          element: <PrivetRoute><Shop/></PrivetRoute> ,
          loader: ()=> fetch('https://server-sigma-pied.vercel.app/product')
        },
        {
          path: "/AddProduct",
          element: <Add/>,
        },
        {
          path: "/SignUp",
          element: <SignUP/>,
        },
        {
          path: "/Login",
          element: <Login/>,
        },
        {
          path: "/product/:id",
          element: <PrivetRoute><Details/></PrivetRoute>,
        loader: ({params}) => fetch(`https://server-sigma-pied.vercel.app/product/${params.id}`)
        },
        {
          path: "/product/:id",
          element: <Details/>,
        loader: ({params}) => fetch(`https://server-sigma-pied.vercel.app/product/${params.id}`)
        },
      ],
    },
  ]);

export default router;