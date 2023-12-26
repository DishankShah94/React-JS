import React, { Suspense } from "react";
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
import ProductDetails from "../Component/ProductDetails.jsx";
import SeatSelector from "../Component/SeatSelector.jsx";
import Logout from "../Pages/Logout.jsx";
import SetStorage from "../Pages/SetStorage.jsx";
import Admindashboard from "../Pages/Admindashboard.jsx";
import Cookieex from "../Pages/Cookie.jsx";
import FormikLogin from "../Pages/FormikLogin.jsx";
import EmailSent from "../Pages/EmailSent.jsx";

const AdminRoute = React.lazy(() => { return import('./AdminRouter.jsx') });
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
    path: "/logout",
    element: (
      <>
        {/* <HeaderFile /> */}
        <Logout />
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
    path: "/emailsent",
    element: (<>
      <HeaderFile />
      <EmailSent />
    </>)
  },
  {
    path: "/formik",
    element: (
      <>
        <HeaderFile />
        <FormikLogin />
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
  },
  {
    path: "/productsdetails/:id",
    element: (
      <>
        <HeaderFile />
        <ProductDetails />
      </>
    )
  },
  {
    path: "/seatSelector",
    element: (
      <>
        <HeaderFile />
        <SeatSelector />
      </>
    )
  },
  {
    path: "/setlocalstorage",
    element: (
      <>
        <HeaderFile />
        <SetStorage />
      </>
    )
  },
  {
    path: "admindashboard",
    element: (
      <>
        <Admindashboard />
      </>
    )
  },
  {
    path: "cookieex",
    element: (
      <>
        <HeaderFile />
        <Cookieex />
      </>
    )
  },
  {
    path: "/admin/*",
    element: <><Suspense fallback={<h2>Loading...</h2>}> <AdminRoute /></Suspense></>,
    // children: [
    //     {
    //         path: "classcompo/*",
    //         element: <Suspense fallback={<h2>Loading...</h2>}> <ClassCompoRoute /></Suspense>,
    //     }
    // ]
  }
]);
export default MainRouter;