import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./assets/components/Header";
import Home from "./assets/components/main/Home";
import Footer from "./assets/components/Footer";
import FadeInComponent from "./assets/components/main/FadeInComponent";
import Page from "./assets/components/uitils/Spinner";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/fade' element = {<FadeInComponent />} ></Route>
                {/* <Route path='/sp' element = {<Page />} ></Route> */}
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;