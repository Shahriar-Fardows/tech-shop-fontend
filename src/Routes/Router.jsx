import {createBrowserRouter} from "react-router-dom";
import Root from "../Root";
import Error from "../Error/Error";
import Home from "../layout/Home/Home";
import Shop from "../layout/Shop/Shop";
import Add from "../layout/AddProdact/Add";
import SignUP from "../layout/Log/SignUP";
import Login from "../layout/Log/Login";
import Details from "../Components/Product/Details";
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
          loader: () => fetch('http://localhost:5000/product')
        },
        {
          path: "/shop",
          element: <PrivetRoute><Shop/></PrivetRoute> ,
          loader: ()=> fetch('http://localhost:5000/product')
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
        loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
        },
        {
          path: "/product/:id",
          element: <Details/>,
        loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
        },
      ],
    },
  ]);

export default router;