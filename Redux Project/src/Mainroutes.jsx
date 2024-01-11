import { createBrowserRouter } from "react-router-dom";
import HeaderCompo from "./CommonCompo/HeaderCompo";
import Home from "./Pages/Home";
import Accessstore from "./Pages/Accessstor";

const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: <>
            <HeaderCompo />
            <Home/>
        </>
    },
    {
        path:"/accessstore",
        element:<>
            <HeaderCompo/>
            <Accessstore/>
        </>
    }
])
export default MainRouter;