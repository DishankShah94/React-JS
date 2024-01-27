import React from 'react';
import { useRoutes } from 'react-router-dom';

import AdminDashboard from '../Admin/AdminDashboard';
import AllUsers from '../Admin/AllUsers';
import EditUser from '../Admin/EditUser';
import AddProduct from '../Admin/AddProduct';
const AdminRoute = () => {

    const routes = useRoutes([
        {
            path: "/",
            element: <AdminDashboard />,
            children: [
                {
                    path: "allusers",
                    element: <AllUsers />,
                },
                {
                    path: "edituser/:id",
                    element: <EditUser />
                },
                {
                    path: "addproduct",
                    element: <AddProduct />
                }
            ]
        }
    ])
    return routes;
}
export default AdminRoute;