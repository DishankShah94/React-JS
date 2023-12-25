import React from 'react';
import { useRoutes } from 'react-router-dom';
import AdminDashboard from './../Pages/Admin/AdminDashboard';
import AllUsers from './../Pages/Admin/AllUsers.jsx';
import EditUser from '../Pages/Admin/EditUser.jsx';
import AdminDashboardHome from '../Pages/Admin/AdminDashboardHome.jsx';


const AdminRoute = () => {
    const routes = useRoutes([
        {
            path: "/",
            element: <AdminDashboard />,
            children: [
                {
                    path: "dashboard",
                    element: <AdminDashboardHome />
                },
                {
                    path: "allusers",
                    element: <AllUsers />,
                },
                {
                    path: "edituser/:userid",
                    element: <EditUser />
                }
            ]
        }
    ])
    return routes;
}
export default AdminRoute;