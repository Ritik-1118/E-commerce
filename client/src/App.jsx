import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useEffect, useState } from "react";
import Layout from "./components/layouts/Layout";
import ProtectedWrapper from "./ProtectedWrapper";
import Register from "./pages/register";
import { Login } from "./pages/login";
import Home from "./pages/home";

export default function App () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={ <Login /> } />
                <Route path="/register" element={ <Register /> } />
                <Route
                    path="/"
                    element={
                        <ProtectedWrapper>
                            <Layout />
                        </ProtectedWrapper>
                    }
                >
                    <Route index element={ <Home /> } />
                    {/* <Route path="/inventory" element={ <Inventory /> } />
                    <Route path="/purchase-details" element={ <PurchaseDetails /> } />
                    <Route path="/sales" element={ <SalesOrder /> } />
                    <Route path="/suppliers" element={ <Suppliers /> } /> */}
                </Route>
                {/* <Route path="*" element={ <NoPageFound /> } /> */}
            </Routes>
        </BrowserRouter>
    )
}