import { createBrowserRouter } from "react-router-dom";
import Header from "../Component/Header";
import SpcialOffers from "../Component/SpecialOffers";
import AllProduct from "../Pages/AllProduct";
import ProductDetails from "../Pages/ProductDetails";
import Footer from "../Pages/Footer";
import Chairs from "../Pages/Chairs";
import Login from "../Component/Login";
import Admin from "../Pages/Admin";
import Card from "../Pages/Card";
import Cart from "../Pages/Cart";
import Buy from "../Pages/Buy";
const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <Header />
                <SpcialOffers />
                <AllProduct />
                <Footer />
            </>
        ),
    },
    // {
    //     path: "/allProduct",
    //     element: (
    //         <>
    //             <Header />
    //             <AllProduct />
    //         </>
    //     ),
    // },
    {
        path: "/login",
        element: (<>
            <Header />
            <Login />
        </>)
    },
    {
        path: "/chair",
        element: (
            <>
                <Header />
                <Chairs />
            </>
        )
    },
    {
        path: "/admin",
        element: (<>
            <Admin />
        </>)
    },
    {
        path: "/card/:id",
        element: (<>
            <Header />
            <Card />
        </>)
    },
    {
        path: "/productsdetails/:id",
        element: (<>
            <Header />
            <ProductDetails />
        </>)
    },
    {
        path: "/cart",
        element: (<>
            <Header />
            <Cart />
        </>)
    },
    {
        path: "/buy",
        element: (<>
            <Header />
            <Buy />
        </>)
    }
]);

export default MainRouter;
