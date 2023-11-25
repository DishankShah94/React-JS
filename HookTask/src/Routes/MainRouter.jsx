import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Header from "./../Component/Header.jsx";
import About from "../Pages/About.jsx";
import Home from "../Pages/Home.jsx"
import Contact from "../Pages/Contact.jsx"
import Example from "../Pages/Example.jsx"
const Functionalconporoute = React.lazy(() => { return import('./Functionalconporoute.jsx') })
const Classcomporoute = React.lazy(() => { return import('./Classcomporoute.jsx') })
const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <Header />
                <Home />
                {/* <Link to="/"></Link> */}
            </>
        )
    },
    {
        path: "/about",
        element: (
            <>
                <Header />
                <About />
                {/* <Link to="/"></Link> */}
            </>
        ),
    },
    {
        path: "/contact",
        element: (
            <>
                <Header />
                <Contact />
                {/* <Link to="/"></Link> */}
            </>
        ),
    },
    {
        path: "/example",
        element: (
            <>
                <Header />
                <Example />
                {/* <Link to="/"></Link> */}
            </>
        ),
        children: [
            {
                path: "/example/functionalcomponent/*",
                element: <Suspense fallback={<>Loading....</>} ><Functionalconporoute /></Suspense>
            },
        ]
    },
    {
        path: "/example",
        element: (
            <>
                <Header />
                <Example />
                {/* <Link to="/"></Link> */}
            </>
        ),
        children: [
            {
                path: "/example/classcomponent/*",
                element: <Suspense fallback={<>Loading....</>} ><Classcomporoute /></Suspense>
            },
        ]
    }
]);
export default MainRouter;