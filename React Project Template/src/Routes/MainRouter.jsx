import React from "react";
import { createBrowserRouter } from "react-router-dom";
// import { Link } from "react-router-dom";
import HeaderFile from "../Component/HeaderFile";
import Slider from "../Component/Slider";

const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <HeaderFile />
        <Slider />
        {/* <Main /> */}
        {/* <Link to="/"></Link> */}
      </>
    ),
  }
]);
export default MainRouter;