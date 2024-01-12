import { createBrowserRouter } from "react-router-dom";
import HeaderCompo from "./CommonCompo/HeaderCompo";
import Registration from "./Pages/Regratation";
import Login from "./Pages/Login";
// import Home from "./Pages/Home";
// import Accessstore from "./Pages/Accessstor";

const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: <>
            <HeaderCompo />
            {/* <Home/> */}
        </>
    },
    {
        path: "/registration",
        element: <>
            <HeaderCompo />
            <Registration />
        </>
    },
    {
        path: "/login",
        element: <>
            <HeaderCompo />
            <Login />
        </>
    }
    // {
    //     path:"/accessstore",
    //     element:<>
    //         <HeaderCompo/>
    //         <Accessstore/>
    //     </>
    // }
])
export default MainRouter;