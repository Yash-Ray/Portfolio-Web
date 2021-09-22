import React from "react";
import Navbar from "../components/navbar";
import ParticleBg from "../components/particle-bg";

function DefaultScreen() {
    return (
        <div className='m-0 h-screen'>
            <Navbar />
            <ParticleBg />
        </div>
    )
}

export default DefaultScreen;