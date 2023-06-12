import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import { productData } from "./apis/Api";
import Product from "./components/Product";
import Login from "./pages/Login";

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration/>
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter(
   [
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
        path: "/",
        element: <Home/>,
        loader: productData,
      },
      {
        path: '/product/:id',
        element: <Product />

      },
      {
        path: '/cart',
        element: <Cart />,
        loader: productData,

      },

      {
        path: '/login',
        element: <Login/>,
      },
    ]
    }
  ]
)

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
