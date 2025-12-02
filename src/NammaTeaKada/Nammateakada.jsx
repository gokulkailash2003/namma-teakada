import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header.jsx";
import Home from "./Home.jsx";
import Aboutus from "./Aboutus.jsx";
import Services from "./Services.jsx";
import Academics from "./Academics.jsx";
import Packages from "./Packages.jsx";
import Portfolio from "./Portfolio.jsx";
import Contact from "./Contact.jsx";
import Bday_photos from "./Bday_photos.jsx";
import BabyShoot from "./Baby_shoot.jsx";   
import Footer from "./Footer.jsx";


function Nammateakada() {
    return (    
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aboutus" element={<Aboutus />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:serviceType" element={<Services />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/academics" element={<Academics />} />
                <Route path="/packages" element={<Packages />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/bday_photos" element={<Bday_photos />} />
                <Route path="/baby_shoot" element={<BabyShoot />} />
            </Routes>
            <Footer />
        </>
    );
}

export default Nammateakada;
