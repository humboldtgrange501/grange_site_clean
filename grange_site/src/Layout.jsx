import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import React from "react";
import './css/Layout.css';


export function Layout() {
    const location = useLocation();
    const isHome = location.pathname === "/";
    return (
        <>
          {isHome && (
                <div className="header-container">
                    <div className="header-image">
                        <img src="/images/homepage_header_image.jpg" alt="Grange Header" className="background-img"/>
                        <div className="header-overlay">
                            <img className="logo-large" src="/images/logo_grange.png" alt="Logo" />
                            <h1>Humboldt Grange #501</h1>
                        </div>
                    </div>
                </div>
           )}
        <Navbar isSticky={!isHome}/>
            <main>
                <Outlet/>
            </main>
        <Footer />
        </>
    );
}

