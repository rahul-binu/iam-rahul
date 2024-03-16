import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./assets/components/Header";
import Home from "./assets/components/main/Home";
import Footer from "./assets/components/Footer";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;