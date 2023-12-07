import React from "react";
import { createBrowserRouter } from "react-router-dom";
// import { Link } from "react-router-dom";
import HeaderFile from "../Component/HeaderFile";
import Slider from "../Component/Slider";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import LoginCompo from "../Pages/LoginCompo";
import RegistrationCompo from "../Pages/RegistrationCompo";
import LatestCollection from "../Component/LatestCollection";
import ManyMoreDetails from "../Pages/ManyMoreDetails.jsx";
import ProductApi from "../Component/ProductApi.jsx";


const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <HeaderFile />
        <Slider />
        <LatestCollection />
        {/* <Main /> */}
        {/* <Link to="/"></Link> */}
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <HeaderFile />
        <About />
      </>
    )
  },
  {
    path: "/contact",
    element: (
      <>
        <HeaderFile />
        <Contact />
      </>
    )
  },
  {
    path: "/login",
    element: (
      <>
        <HeaderFile />
        <LoginCompo />
      </>
    )
  },
  {
    path: "/signup",
    element: (
      <>
        <HeaderFile />
        <RegistrationCompo />
      </>
    )
  },
  {
    path: "/manymore",
    element: (
      <>
        <HeaderFile />
        <ManyMoreDetails />
      </>
    )
  },
  {
    path: "/productapi",
    element: (<>
      <HeaderFile />
      <ProductApi />
    </>)
  }
]);
export default MainRouter;