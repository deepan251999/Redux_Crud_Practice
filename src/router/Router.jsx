import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerAdd from '../components/CustomerAdd';
import CustomerView from '../components/CustomerView';

const Router = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <CustomerAdd />
                        }
                    />
                    <Route
                        path="/view"
                        element={
                            <CustomerView />
                        }
                    />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router;