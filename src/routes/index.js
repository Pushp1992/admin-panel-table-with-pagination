// Generic route created for future use
// in case if we add many more routes

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminPage from '../pages/admin/admin-page';

const RouteList = () => {
    return (
        <Routes>
            <Route path="/" element={<AdminPage />}></Route>
        </Routes>
    )
};

export default RouteList;
