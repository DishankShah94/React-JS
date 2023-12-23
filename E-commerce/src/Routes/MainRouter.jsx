import { createBrowserRouter } from "react-router-dom";
import Header from "../Component/Header";
import SpcialOffers from "../Component/SpecialOffers";
import AllProduct from "../Pages/AllProduct";
import ProductDetails from "../Pages/ProductDetails";
import Footer from "../Pages/Footer";
const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <Header />
                <SpcialOffers />
                <Footer />
            </>
        ),
    },
    {
        path: "/allProduct",
        element: (
            <>
                <Header />
                <AllProduct />
            </>
        ),
    },
    {
        path: "/productsdetails/:id",
        element: (<>
            <Header />
            <ProductDetails />
        </>)
    },


]);

export default MainRouter;