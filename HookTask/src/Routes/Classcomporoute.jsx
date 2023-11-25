import { useRoutes } from "react-router-dom";
import Classcompomenu from "../Component/ClassComponent/01Classcompomenu";
import Classcompointro from "../Component/ClassComponent/02Classcompointro";

const Classcomporoute = () => {
    const routes = useRoutes([
        {
            path: "/",
            element: <Classcompomenu />,
            children: [
                {
                    path: "classcompointro",
                    element: <Classcompointro />
                }
            ]
        }
    ])
    return routes;
}

export default Classcomporoute;