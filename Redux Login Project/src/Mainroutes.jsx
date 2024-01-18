import { createBrowserRouter } from "react-router-dom";
import HeaderCompo from "./CommonCompo/HeaderCompo";
import Registration from "./Pages/Regratation";
import Login from "./Pages/Login";
import Admin from "./Pages/Admin";
import EditUser from "./Pages/EditUser";
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
    },
    {
        path: "/admin",
        element: <>
            <HeaderCompo />
            <Admin />
        </>
    },
    {
        path: "/edituser/:id",
        element: <>
            <HeaderCompo />
            <EditUser />
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