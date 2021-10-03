import React from "react";
import Navbar from "../components/navbar";
import {Switch, Route} from 'react-router-dom';
import Home from '../components/Home';
import Projects from '../components/Projects';

function DefaultScreen() {
    
    return (
        <div className='m-0 h-screen relative z-0 top-0 bg-dark-main overflow-hidden'>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/projects' component={Projects} />
            </Switch>
        </div>
    )
}

export default DefaultScreen;