import React from 'react'
import HomePage from '../pages/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from '../pages/AboutPage';
import ServicePage from '../pages/ServicePage';
import ContactPage from '../pages/ContactPage';
import Navbar from '../commen/Navbar';

const Router = () => {
    return (
        <>
            <BrowserRouter>
            <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/service" element={<ServicePage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router;