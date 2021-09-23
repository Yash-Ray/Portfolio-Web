import React from "react";
import Navbar from "../components/navbar";
import ParticleBg from "../components/particle-bg";

function DefaultScreen() {
    
    return (
        <div className='m-0 h-screen relative z-0 top-0 bg-dark-main overflow-hidden'>
            <Navbar />
            <ParticleBg />
        </div>
    )
}

export default DefaultScreen;