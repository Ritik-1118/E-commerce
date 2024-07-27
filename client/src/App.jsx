import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import ProtectedWrapper from "./ProtectedWrapper";
import Register from "./pages/register";
import { Login } from "./pages/login";
import Home from "./pages/home";
import { PageNotFound } from "./pages/pageNotFound";

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
                </Route>
                <Route path="*" element={ <PageNotFound /> } />
            </Routes>
        </BrowserRouter>
    )
}