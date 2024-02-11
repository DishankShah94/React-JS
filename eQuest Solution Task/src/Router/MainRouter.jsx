import { createBrowserRouter } from "react-router-dom";
import Header from "../Header/Header";
import Film from "../Pages/Film";
import MoreFilms from "../Pages/MoreFilms";



const MainRouter = createBrowserRouter([
    {
        path: '/',
        element: (<>
            <Header />
        </>)
    },
    {
        path: 'film',
        element: (<>
            <Header />
            <Film />
        </>)
    },
    {
        path: "moreFilms",
        element: (<>
            <Header />
            <MoreFilms />
        </>)
    }
])

export default MainRouter;