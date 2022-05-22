import React from "react";
import Navbar from './navbar';
import Sidebar from "./sidebar";
import Footer from "./footer";

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
                        Master File
                    </main>
                    <Footer />
                </div>
            </div>
        </div>
    );

}

export default MasterLayout;