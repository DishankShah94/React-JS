import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminDashboard from './AdminDashboard.jsx';
import AdminMainPage from './AdminMainPage.jsx';
import AdminAllUsers from './AdminAllUsers.jsx';

class ClassCompoRouter extends Component {
    render() {
        return (
            <>
            <Routes>
                <Route path="/" element={<AdminDashboard />} >
                    <Route path="dashboard" element={<AdminMainPage />} />
                    <Route path="allusers" element={<AdminAllUsers />} />
                    <Route path="edituser/:userId" element={<Edituser />} />
                </Route>
            </Routes>
            </>
        );
    }
}

export default ClassCompoRouter;