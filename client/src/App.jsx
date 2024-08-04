import "./index.css";
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import ProtectedWrapper from "./ProtectedWrapper";
import Register from "./pages/register";
import { Login } from "./pages/login";
import Home from "./pages/home";
import { PageNotFound } from "./pages/pageNotFound";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Products from "./pages/products";
import Success from "./pages/paymentResult/success"
import Cancel from "./pages/paymentResult/cancel"
import FAQ from "./pages/FAQ";

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
                    <Route path="product-details/:id" element={<ProductDetails />} />
                    <Route path="products" element={<Products />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="/payment-success" element={<Success />} />
                    <Route path="/payment-cancel" element={<Cancel />} />
                    <Route path="faq" element={<FAQ />} />
                </Route>
                <Route path="*" element={ <PageNotFound /> } />
            </Routes>
        </BrowserRouter>
    )
}