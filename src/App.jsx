import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./assets/components/Header";
import Home from "./assets/components/main/Home";
import Footer from "./assets/components/Footer";
import FadeInComponent from "./assets/components/main/FadeInComponent";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/fade' element = {<FadeInComponent />} ></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;