import React from 'react';
import { useRoutes } from 'react-router-dom';

import AdminDashboard from '../Admin/AdminDashboard';
import AllUsers from '../Admin/AllUsers';


const AdminRoute = () => {

    const routes = useRoutes([
        {
            path: "/",
            element: <AdminDashboard />,
            children: [
                {
                    path: "allusers",
                    element: <AllUsers />,
                }
            ]
        }
    ])
    return routes;
}
export default AdminRoute;