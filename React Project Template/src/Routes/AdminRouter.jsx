import React from 'react';
import { useRoutes } from 'react-router-dom';
import AdminDashboard from './../Pages/Admin/AdminDashboard';
import AllUsers from './../Pages/Admin/AllUsers.jsx';

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