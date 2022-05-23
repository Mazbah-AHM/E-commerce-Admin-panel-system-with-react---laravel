import React from "react";
import Navbar from './navbar';
import Sidebar from "./sidebar";
import Footer from "./footer";

import routes from "../../routes/routes";

import { Navigate, Route, Routes } from 'react-router-dom';


import '../../assets/admin/css/styles.css';
import '../../assets/admin/js/scripts';


const MasterLayout = () => {
    return (
        <div className="sb-nav-fixed">
            <Navbar />
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <Sidebar />
                </div>
                <div id="layoutSidenav_content">
                    <main>
                        <Routes>
                            {routes.map((route, idx) => {
                                return (
                                    route.component && (
                                        <Route
                                            key={idx}
                                            path={route.path}
                                            exact={route.exact}
                                            name={route.name}
                                            render={(props) => (
                                                <route.component {...props} />
                                            )}
                                        />
                                    )
                                )
                            })}
                            
                            <Navigate to='/admin/dashboard' />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </div>
        </div>
    );

}

export default MasterLayout;