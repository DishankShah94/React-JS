
import { createBrowserRouter } from "react-router-dom";
import Header from "../Component/Header";
import SpcialOffers from "../Component/SpecialOffers";
import AllProduct from "../Pages/AllProduct";
import ProductDetails from "../Pages/ProductDetails";
import Footer from "../Pages/Footer";
import Chairs from "../Pages/Chairs";
import Login from "../Component/Login";
// import Admin from "../Pages/Admin";
import Card from "../Pages/Card";
import Cart from "../Pages/Cart";
import Buy from "../Pages/Buy";
import React, { Suspense } from "react";
import ChairsDetails from "../Pages/ChairsDetails";
const AdminRoute = React.lazy(() => import("./AdminRoute"))
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
                <SpcialOffers />
                <Chairs />
                <Footer />
            </>
        )
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
        path: "/ChairsDetails/:id",
        element: (<>
            <Header />
            <ChairsDetails />
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
    },
    {
        path: "/admin/*",
        element: (<>
            <Suspense fallback={<h2>loading...</h2>}><AdminRoute /></Suspense>

        </>)
    }
]);

export default MainRouter;
